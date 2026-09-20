import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm5uod30j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zm5uod30j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:nomagnet"} {...others} />);
}

export default Component;
