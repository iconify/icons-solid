import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rqivp4cfs.css';
import '../../css/e/es5xyc2-s.css';
import '../../css/r/rmmkg2n0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rqivp4cfs"/><path class="es5xyc2-s"/><path class="rmmkg2n0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stream-logo"} {...others} />);
}

export default Component;
