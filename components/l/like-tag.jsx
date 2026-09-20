import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vrht0cc8j.css';
import '../../css/e/eprq-zw1y.css';
import '../../css/s/ssl9qbxfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vrht0cc8j"/><path class="eprq-zw1y"/><path class="ssl9qbxfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:like-tag"} {...others} />);
}

export default Component;
