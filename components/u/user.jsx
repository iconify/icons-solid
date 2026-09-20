import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/f/f67oi6bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="dtl23o_xq"/><path class="f67oi6bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:user"} {...others} />);
}

export default Component;
