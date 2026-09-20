import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xxb6xqbby.css';
import '../../css/e/e9qrw554o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xxb6xqbby"/><path class="e9qrw554o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:star-badge"} {...others} />);
}

export default Component;
