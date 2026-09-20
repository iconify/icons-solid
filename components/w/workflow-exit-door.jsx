import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8fffv6pt.css';
import '../../css/g/gz63ykb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v8fffv6pt"/><path class="gz63ykb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:workflow-exit-door"} {...others} />);
}

export default Component;
