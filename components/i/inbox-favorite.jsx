import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/it_gwnbgn.css';
import '../../css/q/qvnddwfoq.css';
import '../../css/k/kod8e1_2n.css';
import '../../css/v/v05veab8y.css';
import '../../css/d/d2ld_3qrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="it_gwnbgn"/><path class="qvnddwfoq"/><path class="kod8e1_2n"/><path class="v05veab8y"/><path class="d2ld_3qrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:inbox-favorite"} {...others} />);
}

export default Component;
