import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vljrm96wr.css';
import '../../css/j/ju7w-1bcy.css';
import '../../css/s/s7iuqsm4j.css';
import '../../css/o/oxztbklch.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vljrm96wr"/><path clip-rule="evenodd" class="ju7w-1bcy"/><path class="s7iuqsm4j"/><path clip-rule="evenodd" class="oxztbklch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:tg"} {...others} />);
}

export default Component;
