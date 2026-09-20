import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ut0sppbzb.css';
import '../../css/f/f53frobgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ut0sppbzb"/><path class="f53frobgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-ai"} {...others} />);
}

export default Component;
