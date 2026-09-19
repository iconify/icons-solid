import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsm13zbds.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="lsm13zbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ampersand-2-duo"} {...others} />);
}

export default Component;
