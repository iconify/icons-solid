import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy_v_8_dd.css';
import '../../css/a/a38e_428a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wy_v_8_dd"/><path class="a38e_428a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:zig"} {...others} />);
}

export default Component;
