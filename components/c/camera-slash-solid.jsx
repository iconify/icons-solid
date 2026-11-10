import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd6l3mgky.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cd6l3mgky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:camera-slash-solid"} {...others} />);
}

export default Component;
