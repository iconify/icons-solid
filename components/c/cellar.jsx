import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bmp_jrbtq.css';
import '../../css/z/zwv64gbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bmp_jrbtq"/><path class="zwv64gbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cellar"} {...others} />);
}

export default Component;
