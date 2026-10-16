import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ils33xbkf.css';
import '../../css/m/mv-f1_b6h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ils33xbkf"/><path class="mv-f1_b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-marked-20"} {...others} />);
}

export default Component;
