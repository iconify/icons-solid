import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agywoi5bf.css';
import '../../css/f/f9ykafbjq.css';
import '../../css/v/vftpi3b2p.css';
import '../../css/y/yldznkxya.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="agywoi5bf"/><path class="f9ykafbjq"/><path class="vftpi3b2p"/><path class="yldznkxya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:salt"} {...others} />);
}

export default Component;
