import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/q/q9aucu.css';
import '../../css/c/czrd3c.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c q9aucu"/><path class="a0m25c czrd3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:circle-to-confirm-circle-transition"} {...others} />);
}

export default Component;
