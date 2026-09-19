import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kezco1b7s.css';
import '../../css/i/imi7mmp6o.css';
import '../../css/v/v3ltxu4uq.css';
import '../../css/p/pkvsh8bih.css';
import '../../css/o/oj50a951g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kezco1b7s"/><path class="imi7mmp6o"/><path class="v3ltxu4uq"/><path class="pkvsh8bih"/><path class="oj50a951g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:seal"} {...others} />);
}

export default Component;
