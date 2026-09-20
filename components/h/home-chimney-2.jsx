import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_matmuro.css';
import '../../css/i/i-pgc-bkb.css';
import '../../css/m/mw2dlgbhu.css';
import '../../css/j/jkotmtbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_matmuro"/><path class="i-pgc-bkb"/><path class="mw2dlgbhu"/><path class="jkotmtbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:home-chimney-2"} {...others} />);
}

export default Component;
