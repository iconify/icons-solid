import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6jbekf4h.css';
import '../../css/x/xbzc92bph.css';
import '../../css/h/htn4j8b4r.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y6jbekf4h"/><path class="xbzc92bph"/><path class="htn4j8b4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dz-4x3"} {...others} />);
}

export default Component;
