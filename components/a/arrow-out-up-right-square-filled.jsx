import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl25s0bgy.css';
import '../../css/r/r-n6f1bae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl25s0bgy"/><path class="r-n6f1bae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-right-square-filled"} {...others} />);
}

export default Component;
