import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t15ldcb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t15ldcb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:disney-plus-alt"} {...others} />);
}

export default Component;
