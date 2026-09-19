import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztcz48ldh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ztcz48ldh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:battery-most-solid"} {...others} />);
}

export default Component;
