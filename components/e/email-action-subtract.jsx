import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yi9eumbcn.css';
import '../../css/m/m4unhhbun.css';
import '../../css/q/q0slogedd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yi9eumbcn"/><path class="m4unhhbun"/><path class="q0slogedd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-subtract"} {...others} />);
}

export default Component;
