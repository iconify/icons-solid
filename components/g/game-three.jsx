import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bovotab5v.css';
import '../../css/q/qwf9lkbfw.css';
import '../../css/d/dcrmr8b0m.css';
import '../../css/w/wn67ibc7r.css';
import '../../css/b/bq-5d4q0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlLOQEcdJ"><g class="ft5dv1b6b"><path class="bovotab5v"/><rect class="qwf9lkbfw"/><path class="dcrmr8b0m"/><rect class="wn67ibc7r"/><rect class="bq-5d4q0l"/></g></mask></defs><path mask="url(#SVGlLOQEcdJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:game-three"} {...others} />);
}

export default Component;
