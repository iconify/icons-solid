import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7zd1ybtr.css';
import '../../css/b/b3kw4gbdt.css';
import '../../css/l/lu7adg6gh.css';
import '../../css/i/i2brkwkni.css';
import '../../css/t/trhoxwbpk.css';
import '../../css/x/xrm7qqsdq.css';
import '../../css/u/ux02h_-5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d7zd1ybtr"/><path class="b3kw4gbdt"/><path class="lu7adg6gh"/><circle class="i2brkwkni"/><circle class="trhoxwbpk"/><circle class="xrm7qqsdq"/><circle class="ux02h_-5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brain-circuit"} {...others} />);
}

export default Component;
