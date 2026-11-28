import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjr8ncbks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjr8ncbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:app-window-plus"} {...others} />);
}

export default Component;
