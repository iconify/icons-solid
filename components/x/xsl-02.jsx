import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9uu65b9i.css';
import '../../css/b/b1e4-eb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9uu65b9i"/><path class="b1e4-eb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:xsl-02"} {...others} />);
}

export default Component;
