import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xx9l5-b3t.css';
import '../../css/e/epxcuqb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xx9l5-b3t"/><path class="epxcuqb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:refresh-cw"} {...others} />);
}

export default Component;
