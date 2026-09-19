import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfz3w9lrl.css';
import '../../css/i/iq03fbgcg.css';
import '../../css/t/tzwzvh3jp.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="yfz3w9lrl"/><path class="iq03fbgcg"/><path class="tzwzvh3jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-street-view"} {...others} />);
}

export default Component;
