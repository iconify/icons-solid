import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbb_qacmw.css';
import '../../css/o/ogxmpc7da.css';
import '../../css/x/xhzi8ovuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbb_qacmw"/><path class="ogxmpc7da"/><path class="xhzi8ovuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:puzzle-piece"} {...others} />);
}

export default Component;
