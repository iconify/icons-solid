import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c66ev-hat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c66ev-hat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:add-column-before-outline"} {...others} />);
}

export default Component;
