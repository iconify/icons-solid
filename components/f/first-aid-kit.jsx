import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/be41fdzrn.css';
import '../../css/f/f7-uiw-hy.css';
import '../../css/x/xbx953bhf.css';
import '../../css/a/aoyzxvbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="be41fdzrn"/><path class="f7-uiw-hy"/><path class="xbx953bhf"/><path class="aoyzxvbbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:first-aid-kit"} {...others} />);
}

export default Component;
