import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laizaxi8c.css';
import '../../css/n/n32urigtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="laizaxi8c"/><path class="n32urigtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:left-indent"} {...others} />);
}

export default Component;
