import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n72rw4b2e.css';
import '../../css/p/p70horb1t.css';
import '../../css/p/pojivdb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="n72rw4b2e"/><path class="p70horb1t"/><path class="pojivdb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:astronaut-01"} {...others} />);
}

export default Component;
