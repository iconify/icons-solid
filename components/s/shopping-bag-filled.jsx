import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh40lqboz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qh40lqboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shopping-bag-filled"} {...others} />);
}

export default Component;
