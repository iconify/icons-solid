import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2jlo4bnk.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/t/thi55xbxr.css';
import '../../css/u/uuovyrm_y.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="a2jlo4bnk"/><path class="y55zcjfsz"/><path class="thi55xbxr"/><path class="uuovyrm_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:malawi"} {...others} />);
}

export default Component;
