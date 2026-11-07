import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxghssbvs.css';
import '../../css/q/ql_va_b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxghssbvs"/><path clip-rule="evenodd" class="ql_va_b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-clock-bold"} {...others} />);
}

export default Component;
