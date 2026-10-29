import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i4f6ucr4u.css';
import '../../css/y/y0-owe_ax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i4f6ucr4u"/><path class="y0-owe_ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:camera"} {...others} />);
}

export default Component;
