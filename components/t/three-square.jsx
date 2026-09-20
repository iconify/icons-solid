import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyfr6rjow.css';
import '../../css/i/ibend16nn.css';
import '../../css/i/i21ar1oaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pyfr6rjow"/><path class="ibend16nn"/><path class="i21ar1oaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:three-square"} {...others} />);
}

export default Component;
