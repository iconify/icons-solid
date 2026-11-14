import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ok97iac9t.css';
import '../../css/n/nouptulhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ok97iac9t"/><path class="nouptulhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folders"} {...others} />);
}

export default Component;
