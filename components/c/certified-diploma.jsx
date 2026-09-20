import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwy8_4bvo.css';
import '../../css/a/aa0cau6br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kwy8_4bvo"/><path class="aa0cau6br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:certified-diploma"} {...others} />);
}

export default Component;
