import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9y7lbbej.css';
import '../../css/u/u45py-vnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9y7lbbej"/><path class="u45py-vnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-add-to-queue"} {...others} />);
}

export default Component;
