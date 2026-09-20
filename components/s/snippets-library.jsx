import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqaun3icq.css';
import '../../css/b/bk6zi09yk.css';
import '../../css/g/gi2crzbpq.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG8hn2RcFR" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqaun3icq"/><stop offset="1"/></linearGradient><path fill="url(#SVG8hn2RcFR)" class="bk6zi09yk"/><path class="gi2crzbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snippets-library"} {...others} />);
}

export default Component;
