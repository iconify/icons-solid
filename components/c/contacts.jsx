import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep8jf_6qd.css';
import '../../css/o/oh4ogzb0c.css';
import '../../css/e/e2kqkxb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep8jf_6qd"/><circle class="oh4ogzb0c"/><path class="e2kqkxb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:contacts"} {...others} />);
}

export default Component;
