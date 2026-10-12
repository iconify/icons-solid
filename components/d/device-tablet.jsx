import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbfw6_xpm.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 3.77 22.3)" class="bbfw6_xpm"/><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path class="xtyg9db9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet"} {...others} />);
}

export default Component;
