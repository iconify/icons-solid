import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3wtdab_p.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="i3wtdab_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-round-down-left-stipple-inner"} {...others} />);
}

export default Component;
