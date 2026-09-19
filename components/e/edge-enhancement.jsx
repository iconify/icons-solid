import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz0srxb4e.css';
import '../../css/l/l7worlosa.css';
import '../../css/r/ro8ijeb-n.css';
import '../../css/t/t5gqrho5s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oz0srxb4e"/><path class="l7worlosa"/><path class="ro8ijeb-n"/><path class="t5gqrho5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:edge-enhancement"} {...others} />);
}

export default Component;
