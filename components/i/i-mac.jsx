import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls7r-3bzf.css';
import '../../css/f/f5enjebpt.css';
import '../../css/s/sj9habsut.css';
import '../../css/w/wzr2pst3a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLwGm1cZx"><g class="ft5dv1b6b"><path class="ls7r-3bzf"/><path class="f5enjebpt"/><path class="sj9habsut"/><path class="wzr2pst3a"/></g></mask></defs><path mask="url(#SVGLwGm1cZx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:i-mac"} {...others} />);
}

export default Component;
