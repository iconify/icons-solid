import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v889btb6l.css';
import '../../css/i/idyg40bum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v889btb6l"/><path class="idyg40bum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:window-arrow-in"} {...others} />);
}

export default Component;
