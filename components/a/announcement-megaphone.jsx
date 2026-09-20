import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o98lr6b-w.css';
import '../../css/v/vuc8lfbmf.css';
import '../../css/s/su37_dlgf.css';
import '../../css/e/ecqxzqbap.css';
import '../../css/n/n11kupy9m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o98lr6b-w"/><path class="vuc8lfbmf"/><path class="su37_dlgf"/><path class="ecqxzqbap"/><path class="n11kupy9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:announcement-megaphone"} {...others} />);
}

export default Component;
