import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swbyr0bda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swbyr0bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:compiler-explorer"} {...others} />);
}

export default Component;
