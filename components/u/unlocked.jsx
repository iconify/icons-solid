import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbt1npb8q.css';
import '../../css/q/qq_asobta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dbt1npb8q"/><path class="qq_asobta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:unlocked"} {...others} />);
}

export default Component;
