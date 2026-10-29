import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-hhj3umx.css';
import '../../css/o/o06nbyblk.css';
import '../../css/j/jorjefr2e.css';
import '../../css/b/b7on4mbto.css';
import '../../css/p/p2uj-hbxc.css';
import '../../css/g/gf1v_jbeh.css';
import '../../css/m/m6429-jzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-hhj3umx wm-shadow"/><path class="o06nbyblk"/><path class="jorjefr2e"/><path class="b7on4mbto"/><path class="p2uj-hbxc"/><path class="gf1v_jbeh wm-shine"/><path class="m6429-jzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:panel-top"} {...others} />);
}

export default Component;
