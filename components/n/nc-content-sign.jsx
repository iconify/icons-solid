import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ex69hmblk.css';
import '../../css/b/b1wt02bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ex69hmblk"/><path class="b1wt02bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:nc-content-sign"} {...others} />);
}

export default Component;
