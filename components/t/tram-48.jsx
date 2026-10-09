import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uor_fq5sj.css';
import '../../css/w/woz97-b0f.css';
import '../../css/l/l16j5ea0s.css';
import '../../css/d/dur5nuzqb.css';
import '../../css/w/w0ngbebtw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uor_fq5sj"/><path class="woz97-b0f"/><path class="l16j5ea0s"/><path class="dur5nuzqb"/><path class="w0ngbebtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tram-48"} {...others} />);
}

export default Component;
