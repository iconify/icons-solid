import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g8-xck6eq.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g8-xck6eq"/><path class="rsrhfac5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flash-slash"} {...others} />);
}

export default Component;
