import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyjon0btb.css';
import '../../css/t/t1in8db2h.css';
import '../../css/o/ogw7e4m-c.css';
import '../../css/f/fpn8si0az.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hyjon0btb"/><path class="t1in8db2h"/><path class="ogw7e4m-c"/><path class="fpn8si0az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-line-duotone"} {...others} />);
}

export default Component;
