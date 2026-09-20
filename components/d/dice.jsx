import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7sjkfbln.css';
import '../../css/o/o9f0ywb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r7sjkfbln"/><path class="o9f0ywb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:dice"} {...others} />);
}

export default Component;
