import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fjqwq5brw.css';
import '../../css/a/ap48k2b4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fjqwq5brw"/><path class="ap48k2b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:row-minus-duocolor-round"} {...others} />);
}

export default Component;
