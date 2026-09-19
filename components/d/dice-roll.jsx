import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1eird_2e.css';
import '../../css/u/uu2dy8rgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1eird_2e"/><path class="uu2dy8rgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dice-roll"} {...others} />);
}

export default Component;
