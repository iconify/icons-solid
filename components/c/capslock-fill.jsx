import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6_pksxpd.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="s6_pksxpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:capslock-fill"} {...others} />);
}

export default Component;
