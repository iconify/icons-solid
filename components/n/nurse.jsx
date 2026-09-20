import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7z45hb6b.css';
import '../../css/s/s7g2vkbcj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v7z45hb6b"/><path class="s7g2vkbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:nurse"} {...others} />);
}

export default Component;
