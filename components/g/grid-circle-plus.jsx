import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v623fab7r.css';
import '../../css/r/rf6pcbf9p.css';
import '../../css/z/zckikywai.css';
import '../../css/w/w03conbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v623fab7r"/><circle class="rf6pcbf9p"/><circle class="zckikywai"/><circle class="w03conbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid-circle-plus"} {...others} />);
}

export default Component;
