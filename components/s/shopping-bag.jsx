import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5n_-8btg.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="v5n_-8btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:shopping-bag"} {...others} />);
}

export default Component;
