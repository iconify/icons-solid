import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehxc9abdp.css';
import '../../css/d/d4zow5beu.css';
import '../../css/t/t4l76jb3v.css';
import '../../css/m/mmzmgi7kc.css';
import '../../css/j/jgoqprb4r.css';
import '../../css/p/p2s1yi7-t.css';
import '../../css/k/kugif-btu.css';
import '../../css/v/v184-uizj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ehxc9abdp"/><path class="d4zow5beu"/><path class="t4l76jb3v"/><path class="mmzmgi7kc"/><path class="jgoqprb4r"/><path class="p2s1yi7-t"/><path class="kugif-btu"/><path class="v184-uizj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:data-file-search"} {...others} />);
}

export default Component;
