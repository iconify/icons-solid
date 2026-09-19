import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmtc7c2_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hmtc7c2_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:number-1-square-solid"} {...others} />);
}

export default Component;
