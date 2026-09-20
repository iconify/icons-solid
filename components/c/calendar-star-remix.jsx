import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf-m56b4z.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uf-m56b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:calendar-star-remix"} {...others} />);
}

export default Component;
