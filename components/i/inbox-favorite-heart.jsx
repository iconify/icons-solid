import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/n/n5ounvwor.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/q/qxtebfcka.css';
import '../../css/s/strkd2bis.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="n5ounvwor"/><path class="nmg90_b5o"/><path class="qxtebfcka"/><path class="strkd2bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:inbox-favorite-heart"} {...others} />);
}

export default Component;
