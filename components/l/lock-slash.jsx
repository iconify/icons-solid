import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cfv20vb2c.css';
import '../../css/h/h5y2p1bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cfv20vb2c"/><path class="h5y2p1bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-slash"} {...others} />);
}

export default Component;
