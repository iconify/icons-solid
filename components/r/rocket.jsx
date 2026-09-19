import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2jx_csvf.css';

const viewBox = {"width":1664,"height":1632};
const content = `<path class="u2jx_csvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:rocket"} {...others} />);
}

export default Component;
