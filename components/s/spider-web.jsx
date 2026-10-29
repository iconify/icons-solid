import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ygh1kydko.css';
import '../../css/c/cgk5-ovwf.css';
import '../../css/u/uon22zmpe.css';
import '../../css/u/u4hsdqbem.css';
import '../../css/i/iwhgb9zjj.css';
import '../../css/h/h14-qacte.css';
import '../../css/a/agwpx5p0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ygh1kydko"/><path class="cgk5-ovwf"/><path class="uon22zmpe"/><path class="u4hsdqbem"/><path class="iwhgb9zjj"/><path class="h14-qacte"/><path class="agwpx5p0e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:spider-web"} {...others} />);
}

export default Component;
