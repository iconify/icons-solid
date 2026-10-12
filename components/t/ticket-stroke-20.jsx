import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3jzqsvjd.css';
import '../../css/o/o1j_wmpcg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f3jzqsvjd"/><path class="o1j_wmpcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:ticket-stroke-20"} {...others} />);
}

export default Component;
