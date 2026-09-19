import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idvppfb9u.css';

const viewBox = {"width":1760,"height":1792};
const content = `<path class="idvppfb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-amount-asc"} {...others} />);
}

export default Component;
