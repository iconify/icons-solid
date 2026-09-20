import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c7ioo7byx.css';
import '../../css/l/l-gt28bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c7ioo7byx"/><path class="l-gt28bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-check"} {...others} />);
}

export default Component;
