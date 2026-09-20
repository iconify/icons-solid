import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aj4zjch4y.css';
import '../../css/y/y4rimj_9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aj4zjch4y"/><path class="y4rimj_9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:scanner"} {...others} />);
}

export default Component;
