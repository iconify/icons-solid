import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zdtg4zb5k.css';
import '../../css/g/g-e973v2v.css';
import '../../css/k/k237b059b.css';
import '../../css/d/d8slobc7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zdtg4zb5k"/><path class="g-e973v2v"/><path class="k237b059b"/><path class="d8slobc7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lock-shield"} {...others} />);
}

export default Component;
