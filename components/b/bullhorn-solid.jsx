import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x974jcb9h.css';
import '../../css/w/w6uyb-bug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x974jcb9h"/><path class="w6uyb-bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:bullhorn-solid"} {...others} />);
}

export default Component;
