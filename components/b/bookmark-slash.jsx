import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sktsi7btg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sktsi7btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:bookmark-slash"} {...others} />);
}

export default Component;
