import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/veiumxu1l.css';
import '../../css/v/vulyhfb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="veiumxu1l"/><path class="vulyhfb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:regular-expression"} {...others} />);
}

export default Component;
