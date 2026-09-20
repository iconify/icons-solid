import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhe70kwmw.css';
import '../../css/f/f-6nxexvx.css';
import '../../css/w/wwemd7z7m.css';
import '../../css/w/wa4t1cfmf.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="bhe70kwmw"/><path class="f-6nxexvx"/><path class="wwemd7z7m"/><path class="wa4t1cfmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:authority"} {...others} />);
}

export default Component;
