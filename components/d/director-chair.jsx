import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gup7oq7qr.css';
import '../../css/r/rw6k9xbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="gup7oq7qr"/><path class="rw6k9xbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:director-chair"} {...others} />);
}

export default Component;
