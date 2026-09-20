import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv5fog1mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv5fog1mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:column-remove"} {...others} />);
}

export default Component;
