import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c29n8724j.css';
import '../../css/z/z9r16-b2r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="c29n8724j"/><path class="z9r16-b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:thermometer"} {...others} />);
}

export default Component;
