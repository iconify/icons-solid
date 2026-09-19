import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep5hu0tam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep5hu0tam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:turbolinux"} {...others} />);
}

export default Component;
