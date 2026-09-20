import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og_9js9al.css';
import '../../css/x/xjh3njbok.css';
import '../../css/w/w4_njp3qx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="og_9js9al"/><circle class="xjh3njbok"/><path class="w4_njp3qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:git-compare"} {...others} />);
}

export default Component;
