import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6_537x8t.css';
import '../../css/v/vd_9zuben.css';
import '../../css/s/ss70euapj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f6_537x8t"/><path class="vd_9zuben"/><path class="ss70euapj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:question-circle-o"} {...others} />);
}

export default Component;
