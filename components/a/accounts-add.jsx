import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uglkwz-2l.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="uglkwz-2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:accounts-add"} {...others} />);
}

export default Component;
