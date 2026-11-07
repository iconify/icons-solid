import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl4bbtw5c.css';
import '../../css/y/ynwkrvbew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl4bbtw5c"/><path class="ynwkrvbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-bold"} {...others} />);
}

export default Component;
