import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-r02jbvg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="u-r02jbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:screen-mag-alt"} {...others} />);
}

export default Component;
