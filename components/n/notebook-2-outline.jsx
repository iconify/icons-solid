import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s94wizb4p.css';
import '../../css/a/a2vumeq3o.css';
import '../../css/s/s3m1l3b4t.css';
import '../../css/u/u4_xj9blu.css';
import '../../css/u/u7mfpjuoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s94wizb4p"/><path class="a2vumeq3o"/><path class="s3m1l3b4t"/><path class="u4_xj9blu"/><path clip-rule="evenodd" class="u7mfpjuoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-2-outline"} {...others} />);
}

export default Component;
