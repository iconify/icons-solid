import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6xlo84ma.css';
import '../../css/x/xapspt1er.css';
import '../../css/r/re3vafbfx.css';
import '../../css/l/l_pb9i6ko.css';
import '../../css/l/luhcl8blk.css';
import '../../css/o/o0750qgqr.css';
import '../../css/v/v1q98mb2o.css';
import '../../css/y/y9v4osrvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x6xlo84ma"/><path class="xapspt1er"/><path class="re3vafbfx"/><path class="l_pb9i6ko"/><path class="luhcl8blk"/><path class="o0750qgqr"/><path class="v1q98mb2o"/><path class="y9v4osrvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smart-watch-square-location"} {...others} />);
}

export default Component;
