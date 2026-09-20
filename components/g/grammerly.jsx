import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2ji48b7g.css';
import '../../css/n/nu_bmoc4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v2ji48b7g"/><path class="nu_bmoc4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grammerly"} {...others} />);
}

export default Component;
