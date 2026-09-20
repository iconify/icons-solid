import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q35v8bcra.css';
import '../../css/u/uwkdhxwda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="q35v8bcra"/><path class="uwkdhxwda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:computer"} {...others} />);
}

export default Component;
