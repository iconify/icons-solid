import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h92865b4u.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h92865b4u"/><path class="ruoobvlrj"/><path class="p552hfbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-edit"} {...others} />);
}

export default Component;
