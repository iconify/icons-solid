import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brc8u4q-m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="brc8u4q-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:caret-left"} {...others} />);
}

export default Component;
