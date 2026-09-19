import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqvt6ac-p.css';

const viewBox = {"width":376,"height":384};
const content = `<path class="cqvt6ac-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:fast-rewind"} {...others} />);
}

export default Component;
