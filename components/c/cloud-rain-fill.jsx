import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fewzlh02g.css';
import '../../css/t/t147b4bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fewzlh02g"/><path class="t147b4bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-rain-fill"} {...others} />);
}

export default Component;
