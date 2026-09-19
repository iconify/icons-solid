import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/udvujtm1n.css';
import '../../css/u/uood5i57a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="udvujtm1n"/><path class="uood5i57a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:riyal-rectangle"} {...others} />);
}

export default Component;
