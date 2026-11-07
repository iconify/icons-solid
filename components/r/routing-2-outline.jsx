import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti_9tgx1a.css';
import '../../css/q/qpq6tjknf.css';
import '../../css/s/su7532b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti_9tgx1a"/><path class="qpq6tjknf"/><path clip-rule="evenodd" class="su7532b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-outline"} {...others} />);
}

export default Component;
