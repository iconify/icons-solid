import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrzvno.css';
import '../../css/y/ydovum.css';
import '../../css/g/ggwg4n.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-jkxijw.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrzvno ydovum"/><circle class="ggwg4n ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-alt-twotone"} {...others} />);
}

export default Component;
