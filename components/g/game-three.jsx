import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bovotab5v.css';
import '../../css/g/gubyjri1y.css';
import '../../css/q/qfbc1xbpu.css';
import '../../css/c/cvwqdz8ts.css';
import '../../css/s/s5fd5bb-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLYq4ybGn"><g class="ft5dv1b6b"><path class="bovotab5v"/><rect class="gubyjri1y"/><path class="qfbc1xbpu"/><rect class="cvwqdz8ts"/><rect class="s5fd5bb-l"/></g></mask></defs><path mask="url(#SVGLYq4ybGn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:game-three"} {...others} />);
}

export default Component;
