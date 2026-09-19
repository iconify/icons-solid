import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf2gz2hlr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bf2gz2hlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:apps-bold"} {...others} />);
}

export default Component;
