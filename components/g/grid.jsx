import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxyynzfvw.css';
import '../../css/y/ygi_xvn9l.css';
import '../../css/h/hckasvbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxyynzfvw"/><path class="ygi_xvn9l"/><path class="hckasvbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:grid"} {...others} />);
}

export default Component;
