import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmug3jb3z.css';
import '../../css/p/pw-yybc7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qmug3jb3z"/><path class="pw-yybc7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:redo-01"} {...others} />);
}

export default Component;
