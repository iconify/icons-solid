import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6vu6zbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6vu6zbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-hour-1"} {...others} />);
}

export default Component;
