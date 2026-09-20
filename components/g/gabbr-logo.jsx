import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kztr4db3g.css';
import '../../css/c/c8m1a62nx.css';
import '../../css/g/g2v8rwb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="kztr4db3g"/><path class="c8m1a62nx"/><path class="g2v8rwb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gabbr-logo"} {...others} />);
}

export default Component;
