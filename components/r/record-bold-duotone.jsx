import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7ssc3b8h.css';
import '../../css/z/zo3cxx6gk.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="i7ssc3b8h"/><path clip-rule="evenodd" class="zo3cxx6gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-bold-duotone"} {...others} />);
}

export default Component;
