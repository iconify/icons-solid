import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu9iqqbki.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zu9iqqbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:face-smile-solid"} {...others} />);
}

export default Component;
