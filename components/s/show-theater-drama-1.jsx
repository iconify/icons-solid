import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jthl_nb3l.css';
import '../../css/p/pe8tb_8ds.css';
import '../../css/r/rk2bd1jzl.css';
import '../../css/w/wvsq8lpvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jthl_nb3l"/><path class="pe8tb_8ds"/><path class="rk2bd1jzl"/><path class="wvsq8lpvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:show-theater-drama-1"} {...others} />);
}

export default Component;
