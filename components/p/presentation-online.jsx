import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxpkz-b5o.css';
import '../../css/i/il9-ih3wv.css';
import '../../css/f/fbvloacdy.css';
import '../../css/x/x5jv-2b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rxpkz-b5o"/><path class="il9-ih3wv"/><path class="fbvloacdy"/><path class="x5jv-2b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-online"} {...others} />);
}

export default Component;
