import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3ac9d9jn.css';
import '../../css/w/wesutfjtn.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/a/a2yq5ccvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m3ac9d9jn"/><path class="wesutfjtn"/><path class="xtyg9db9j"/><path class="a2yq5ccvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-move"} {...others} />);
}

export default Component;
