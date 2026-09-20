import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqdxqyb4e.css';
import '../../css/z/zu2bzewsl.css';
import '../../css/j/jgj9542vd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zqdxqyb4e"/><path class="zu2bzewsl"/><path class="jgj9542vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:polygon-lasso"} {...others} />);
}

export default Component;
