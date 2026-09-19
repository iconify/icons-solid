import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5ncrxk5t.css';
import '../../css/b/b5750rzfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q5ncrxk5t"/><path class="b5750rzfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-circle-02"} {...others} />);
}

export default Component;
