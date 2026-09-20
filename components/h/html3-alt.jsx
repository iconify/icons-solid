import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe-e3cc2p.css';
import '../../css/y/y8v76ebvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fe-e3cc2p"/><path class="y8v76ebvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:html3-alt"} {...others} />);
}

export default Component;
