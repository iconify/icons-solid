import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5lq4rg2r.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="k5lq4rg2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:reddit"} {...others} />);
}

export default Component;
