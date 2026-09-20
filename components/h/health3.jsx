import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xi0dnf10r.css';
import '../../css/d/do83y6b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xi0dnf10r"/><path class="do83y6b-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:health3"} {...others} />);
}

export default Component;
