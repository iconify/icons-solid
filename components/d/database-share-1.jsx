import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aph2hnbej.css';
import '../../css/b/bahboy6vw.css';
import '../../css/o/otjgmebrb.css';
import '../../css/y/y0agu8hut.css';
import '../../css/b/bjzld0bkh.css';
import '../../css/l/lkz88wbbf.css';
import '../../css/n/n60r111wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aph2hnbej"/><path class="bahboy6vw"/><path class="otjgmebrb"/><path class="y0agu8hut"/><path class="bjzld0bkh"/><path class="lkz88wbbf"/><path class="n60r111wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:database-share-1"} {...others} />);
}

export default Component;
