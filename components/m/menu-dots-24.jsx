import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1mk5dhbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1mk5dhbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:menu-dots-24"} {...others} />);
}

export default Component;
