import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/pjw4h4wuo.css';
import '../../css/r/rt1h_-mxc.css';
import '../../css/h/hsxkkdbde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAVOXMIBC"><g class="ufeehvblu"><path class="pjw4h4wuo"/><path class="rt1h_-mxc"/><path class="hsxkkdbde"/></g></mask></defs><path mask="url(#SVGAVOXMIBC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shake"} {...others} />);
}

export default Component;
