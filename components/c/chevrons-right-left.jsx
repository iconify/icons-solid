import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qclgze96h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qclgze96h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chevrons-right-left"} {...others} />);
}

export default Component;
