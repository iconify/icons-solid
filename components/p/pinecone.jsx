import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlxfrac8y.css';

const viewBox = {"width":220,"height":220};
const content = `<path clip-rule="evenodd" class="qlxfrac8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:pinecone"} {...others} />);
}

export default Component;
