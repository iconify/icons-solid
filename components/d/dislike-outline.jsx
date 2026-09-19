import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_xwo0bva.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f_xwo0bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:dislike-outline"} {...others} />);
}

export default Component;
