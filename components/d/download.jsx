import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/preezm99t.css';
import '../../css/z/zdn65bb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="preezm99t"/><path class="zdn65bb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:download"} {...others} />);
}

export default Component;
