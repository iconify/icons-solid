import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr2kdfbqj.css';
import '../../css/r/rmktywb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kr2kdfbqj"/><path class="rmktywb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shopping-bag"} {...others} />);
}

export default Component;
