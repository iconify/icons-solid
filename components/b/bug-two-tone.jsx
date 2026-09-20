import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xed5if1bo.css';
import '../../css/i/ikg_5ub0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xed5if1bo"/><path class="ikg_5ub0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bug-two-tone"} {...others} />);
}

export default Component;
