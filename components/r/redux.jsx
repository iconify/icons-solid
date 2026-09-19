import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t99j2sggn.css';
import '../../css/r/rswgeacvu.css';
import '../../css/z/zidxczbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t99j2sggn"/><path class="rswgeacvu"/><path class="zidxczbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:redux"} {...others} />);
}

export default Component;
