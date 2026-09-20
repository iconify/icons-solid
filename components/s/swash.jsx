import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-xy7fdst.css';
import '../../css/h/hcnon4f5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a-xy7fdst"/><path class="hcnon4f5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:swash"} {...others} />);
}

export default Component;
