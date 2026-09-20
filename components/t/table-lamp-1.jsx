import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlsig2bgm.css';
import '../../css/e/eaq7x0beu.css';
import '../../css/u/uf-94osvf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xlsig2bgm"/><path class="eaq7x0beu"/><path class="uf-94osvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:table-lamp-1"} {...others} />);
}

export default Component;
