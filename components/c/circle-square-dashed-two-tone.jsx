import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zaxsh8bsw.css';
import '../../css/t/t1gcaccwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zaxsh8bsw"/><path class="t1gcaccwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-square-dashed-two-tone"} {...others} />);
}

export default Component;
