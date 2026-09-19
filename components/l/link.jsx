import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd12_wbjy.css';
import '../../css/i/iyp56ebds.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zd12_wbjy"/><path class="iyp56ebds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:link"} {...others} />);
}

export default Component;
