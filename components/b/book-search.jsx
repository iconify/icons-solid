import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfq1n-bel.css';
import '../../css/q/qqg6zzx6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lfq1n-bel"/><path class="qqg6zzx6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-search"} {...others} />);
}

export default Component;
