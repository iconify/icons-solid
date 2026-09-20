import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cb5k0fb4e.css';
import '../../css/q/qglu0sgat.css';
import '../../css/w/w379rftri.css';
import '../../css/x/xn2m8zz0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="cb5k0fb4e"/><rect class="qglu0sgat"/><rect class="w379rftri"/><rect class="xn2m8zz0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:grid"} {...others} />);
}

export default Component;
