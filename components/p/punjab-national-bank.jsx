import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhg31ab6k.css';
import '../../css/g/g6amu9bqo.css';
import '../../css/t/til_4nbtz.css';
import '../../css/z/zy1595bom.css';

const viewBox = {"width":180.359,"height":35.355};
const content = `<path class="xhg31ab6k"/><path class="g6amu9bqo"/><path class="til_4nbtz"/><path class="zy1595bom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:punjab-national-bank"} {...others} />);
}

export default Component;
