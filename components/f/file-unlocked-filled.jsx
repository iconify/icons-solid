import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgf_iypbv.css';
import '../../css/n/n662dbbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgf_iypbv"/><path class="n662dbbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-unlocked-filled"} {...others} />);
}

export default Component;
