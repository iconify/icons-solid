import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnw8xj-ud.css';
import '../../css/q/qpluhh6le.css';
import '../../css/y/ye2t84big.css';
import '../../css/c/c0achrb6w.css';
import '../../css/x/xkg-i0b5m.css';
import '../../css/v/v7y3phgla.css';
import '../../css/z/zww2jdijn.css';
import '../../css/w/w5jhkqb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rnw8xj-ud wm-shadow"/><path class="qpluhh6le wm-shadow"/><path class="ye2t84big"/><path class="c0achrb6w"/><path class="xkg-i0b5m"/><path class="v7y3phgla"/><path class="zww2jdijn"/><path class="w5jhkqb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:mail"} {...others} />);
}

export default Component;
