import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_x9f2kmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_x9f2kmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:letters-z"} {...others} />);
}

export default Component;
