import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/difr24bit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="difr24bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:menu-fold-line"} {...others} />);
}

export default Component;
