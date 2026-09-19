import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzavsk_ms.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tzavsk_ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:insertbarchart"} {...others} />);
}

export default Component;
