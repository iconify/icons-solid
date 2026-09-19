import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o76v0vh3i.css';
import '../../css/x/xdmoomhwk.css';
import '../../css/j/jc6ju62gl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVHGVby4n"><g class="v3_i3wktz"><path class="o76v0vh3i"/><path class="xdmoomhwk"/><path class="jc6ju62gl"/></g></mask></defs><path mask="url(#SVGVHGVby4n)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:send-to-back"} {...others} />);
}

export default Component;
