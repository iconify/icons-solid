import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu1k2-bmq.css';
import '../../css/p/pa14hnb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu1k2-bmq"/><path class="pa14hnb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-code"} {...others} />);
}

export default Component;
