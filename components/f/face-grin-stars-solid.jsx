import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v16xx8pet.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v16xx8pet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:face-grin-stars-solid"} {...others} />);
}

export default Component;
