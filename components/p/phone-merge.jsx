import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvmue5hsj.css';
import '../../css/b/b8f7uhb9w.css';
import '../../css/b/bzhf89elo.css';
import '../../css/y/ymdxg_blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mvmue5hsj"/><path class="b8f7uhb9w"/><path class="bzhf89elo"/><path class="ymdxg_blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:phone-merge"} {...others} />);
}

export default Component;
