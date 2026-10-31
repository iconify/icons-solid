import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4933sbdd.css';
import '../../css/u/u390qmb9f.css';
import '../../css/i/ipkrns2yp.css';
import '../../css/c/cv-akkbiy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p4933sbdd"/><path class="u390qmb9f"/><path class="ipkrns2yp"/><path class="cv-akkbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:ladybug-pop"} {...others} />);
}

export default Component;
