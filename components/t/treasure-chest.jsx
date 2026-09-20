import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c02qj952z.css';
import '../../css/e/eoz3msbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c02qj952z"/><path class="eoz3msbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:treasure-chest"} {...others} />);
}

export default Component;
