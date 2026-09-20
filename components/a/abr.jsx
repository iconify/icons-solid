import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t38kseb5u.css';
import '../../css/a/ahikl4b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t38kseb5u"/><path class="ahikl4b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:abr"} {...others} />);
}

export default Component;
