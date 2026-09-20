import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jekm3z_ba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jekm3z_ba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:hammer-alt-line"} {...others} />);
}

export default Component;
