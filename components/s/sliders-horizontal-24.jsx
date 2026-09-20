import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf53lvbya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pf53lvbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sliders-horizontal-24"} {...others} />);
}

export default Component;
