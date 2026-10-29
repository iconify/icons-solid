import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2_fu_bwp.css';
import '../../css/r/r42-uz-ln.css';
import '../../css/f/fnyksabiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2_fu_bwp"/><path class="r42-uz-ln"/><path class="fnyksabiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:copy"} {...others} />);
}

export default Component;
