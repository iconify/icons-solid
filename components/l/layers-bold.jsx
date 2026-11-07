import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo0l9j9lh.css';
import '../../css/n/nk-dx3faz.css';
import '../../css/q/ql2i1fbyo.css';
import '../../css/e/eusfa-1-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo0l9j9lh"/><path clip-rule="evenodd" class="nk-dx3faz"/><path class="ql2i1fbyo"/><path class="eusfa-1-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-bold"} {...others} />);
}

export default Component;
