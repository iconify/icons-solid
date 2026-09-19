import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9silmbdd.css';
import '../../css/b/b9qj8z5ts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9silmbdd"/><path class="b9qj8z5ts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:self-transfer"} {...others} />);
}

export default Component;
