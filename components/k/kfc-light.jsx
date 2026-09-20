import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uome-0b3l.css';
import '../../css/g/g4a26gb0c.css';
import '../../css/p/pe71vincc.css';

const viewBox = {"width":1683.78,"height":1289.764};
const content = `<path class="uome-0b3l"/><path class="g4a26gb0c"/><path class="pe71vincc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kfc-light"} {...others} />);
}

export default Component;
