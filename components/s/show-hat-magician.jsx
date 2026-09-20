import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/avdkk0beh.css';
import '../../css/p/p9ga7eb6t.css';
import '../../css/n/n4jwq5b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="avdkk0beh"/><path class="p9ga7eb6t"/><path class="n4jwq5b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:show-hat-magician"} {...others} />);
}

export default Component;
