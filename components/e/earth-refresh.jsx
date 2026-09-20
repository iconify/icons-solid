import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eu2tv-bak.css';
import '../../css/a/a96ba9-sk.css';
import '../../css/j/jwjvb1bpj.css';
import '../../css/c/c6t3c-ate.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eu2tv-bak"/><path class="a96ba9-sk"/><path class="jwjvb1bpj"/><path class="c6t3c-ate"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-refresh"} {...others} />);
}

export default Component;
