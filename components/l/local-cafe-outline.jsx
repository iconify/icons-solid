import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om1j0hb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="om1j0hb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:local-cafe-outline"} {...others} />);
}

export default Component;
