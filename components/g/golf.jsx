import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9u8tbcym.css';
import '../../css/o/o_4vtebcc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q9u8tbcym"/><path class="o_4vtebcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:golf"} {...others} />);
}

export default Component;
