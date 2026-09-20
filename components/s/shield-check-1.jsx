import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2fc5ib8x.css';
import '../../css/j/jb14cqigq.css';
import '../../css/v/vxxo7mb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o2fc5ib8x"/><path class="jb14cqigq"/><path class="vxxo7mb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shield-check-1"} {...others} />);
}

export default Component;
