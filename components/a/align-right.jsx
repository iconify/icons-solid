import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/z/zs3id2b8k.css';
import '../../css/q/q-0qdxbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="zs3id2b8k"/><path class="q-0qdxbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-right"} {...others} />);
}

export default Component;
