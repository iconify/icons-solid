import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t36f-0yld.css';
import '../../css/u/uzoiubtil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t36f-0yld"/><path class="uzoiubtil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ev-charger"} {...others} />);
}

export default Component;
