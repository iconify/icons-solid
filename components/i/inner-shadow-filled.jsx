import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egeq1474n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b egeq1474n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:inner-shadow-filled"} {...others} />);
}

export default Component;
