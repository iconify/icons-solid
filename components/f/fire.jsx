import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea60m-ctv.css';
import '../../css/a/a-2uzlbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ea60m-ctv"/><path class="a-2uzlbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:fire"} {...others} />);
}

export default Component;
