import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lvj7pdg0l.css';
import '../../css/d/daesvybit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lvj7pdg0l"/><path class="daesvybit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-line-duotone"} {...others} />);
}

export default Component;
