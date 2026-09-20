import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wod8oip1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wod8oip1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:stacks"} {...others} />);
}

export default Component;
