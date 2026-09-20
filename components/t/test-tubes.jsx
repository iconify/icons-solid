import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tigx9-xcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tigx9-xcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:test-tubes"} {...others} />);
}

export default Component;
