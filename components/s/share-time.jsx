import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kh9rsjb-p.css';
import '../../css/h/hqs9gt-qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kh9rsjb-p"/><path class="hqs9gt-qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:share-time"} {...others} />);
}

export default Component;
