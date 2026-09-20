import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z7r3y6e4i.css';
import '../../css/a/axvn-0b2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="z7r3y6e4i"/><path class="axvn-0b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-roadmap"} {...others} />);
}

export default Component;
