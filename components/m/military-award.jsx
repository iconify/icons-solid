import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_93fzumo.css';
import '../../css/s/s7e2jt5ro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i_93fzumo"/><path class="s7e2jt5ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:military-award"} {...others} />);
}

export default Component;
