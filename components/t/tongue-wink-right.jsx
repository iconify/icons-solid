import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygh7ci8ga.css';
import '../../css/a/ayc2nrb8u.css';
import '../../css/a/ab8vmjhok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ygh7ci8ga"/><path class="ayc2nrb8u"/><path class="ab8vmjhok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tongue-wink-right"} {...others} />);
}

export default Component;
