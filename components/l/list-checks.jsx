import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhozasbnq.css';
import '../../css/f/fxgfi4uqk.css';
import '../../css/w/wqjyc70ge.css';
import '../../css/j/jj02eab0l.css';
import '../../css/f/fwkbxq8ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xhozasbnq"/><path class="fxgfi4uqk wm-k"/><path class="wm-k wqjyc70ge"/><path class="jj02eab0l wm-a"/><path class="fwkbxq8ea wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-checks"} {...others} />);
}

export default Component;
