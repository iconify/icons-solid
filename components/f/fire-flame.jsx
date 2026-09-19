import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-y2n7b-y.css';
import '../../css/y/ynjeod88n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-y2n7b-y"/><path class="ynjeod88n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fire-flame"} {...others} />);
}

export default Component;
