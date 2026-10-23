import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjsl-2b0j.css';
import '../../css/e/e2zbkmb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yjsl-2b0j"/><path class="e2zbkmb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-alert"} {...others} />);
}

export default Component;
