import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs9ntbb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs9ntbb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:nav-arrow-right"} {...others} />);
}

export default Component;
