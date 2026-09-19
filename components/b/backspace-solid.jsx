import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml2j3nbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ml2j3nbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:backspace-solid"} {...others} />);
}

export default Component;
