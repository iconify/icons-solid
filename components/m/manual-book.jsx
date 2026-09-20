import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o47z8vbtc.css';
import '../../css/i/i3aplqbmt.css';
import '../../css/c/c8flc_b6m.css';
import '../../css/x/xw6fkrbpe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o47z8vbtc"/><path class="i3aplqbmt"/><path class="c8flc_b6m"/><path class="xw6fkrbpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:manual-book"} {...others} />);
}

export default Component;
