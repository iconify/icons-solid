import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgrhs7gql.css';
import '../../css/p/poklmubzw.css';
import '../../css/w/wg3qgiuga.css';
import '../../css/j/jc-d98biu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rgrhs7gql"/><path class="poklmubzw"/><path class="wg3qgiuga"/><path class="jc-d98biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-bubble"} {...others} />);
}

export default Component;
