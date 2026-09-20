import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgtrtkb3i.css';
import '../../css/e/e7jvezb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sgtrtkb3i"/><path class="e7jvezb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bing-search-logo"} {...others} />);
}

export default Component;
