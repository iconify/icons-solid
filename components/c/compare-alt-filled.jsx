import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anuis4b4o.css';
import '../../css/q/q3g9f9bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="anuis4b4o b"/><path class="b q3g9f9bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:compare-alt-filled"} {...others} />);
}

export default Component;
