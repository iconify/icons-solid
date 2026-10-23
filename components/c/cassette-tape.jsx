import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vopump9wh.css';
import '../../css/b/b4sa2gbal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vopump9wh"/><path class="b4sa2gbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cassette-tape"} {...others} />);
}

export default Component;
