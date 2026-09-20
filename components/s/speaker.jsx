import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7ts12btk.css';
import '../../css/b/bwujhmd2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o7ts12btk"/><path class="bwujhmd2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:speaker"} {...others} />);
}

export default Component;
