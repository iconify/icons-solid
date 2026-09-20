import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldx1wpbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldx1wpbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:13-plus"} {...others} />);
}

export default Component;
