import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0nlyobyz.css';
import '../../css/e/e4xck0bwa.css';
import '../../css/i/ialavsbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q0nlyobyz"/><path class="e4xck0bwa"/><path class="ialavsbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-02"} {...others} />);
}

export default Component;
