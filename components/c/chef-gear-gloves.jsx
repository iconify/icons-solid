import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wbgejounq.css';
import '../../css/q/qjc61bqyj.css';
import '../../css/f/fx-19q-7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wbgejounq"/><path class="qjc61bqyj"/><path class="fx-19q-7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chef-gear-gloves"} {...others} />);
}

export default Component;
