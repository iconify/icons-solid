import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emm7uglhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="emm7uglhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-x-bold"} {...others} />);
}

export default Component;
