import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdok4feqm.css';
import '../../css/z/z1p0jfzmb.css';
import '../../css/j/jpb3v2njc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="hdok4feqm"/><path class="z1p0jfzmb"/><path class="jpb3v2njc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:notes"} {...others} />);
}

export default Component;
