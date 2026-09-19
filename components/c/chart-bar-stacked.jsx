import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bznyk4v8u.css';
import '../../css/w/wyt8hgbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bznyk4v8u"/><path class="wyt8hgbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-bar-stacked"} {...others} />);
}

export default Component;
