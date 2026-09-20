import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sdn1o94xw.css';
import '../../css/e/el5t0vbwe.css';
import '../../css/f/fftbuu8sb.css';
import '../../css/a/ak2-klber.css';
import '../../css/a/aj1_dqb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sdn1o94xw"/><path class="el5t0vbwe"/><path clip-rule="evenodd" class="fftbuu8sb"/><path class="ak2-klber"/><path class="aj1_dqb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:view-document-files"} {...others} />);
}

export default Component;
