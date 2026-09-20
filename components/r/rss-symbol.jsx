import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocqchfxxl.css';
import '../../css/b/b5b9-eacu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ocqchfxxl"/><path class="b5b9-eacu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:rss-symbol"} {...others} />);
}

export default Component;
