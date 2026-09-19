import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlbhu4b3j.css';
import '../../css/v/vcstvubhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlbhu4b3j"/><path clip-rule="evenodd" class="vcstvubhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:book-check-outline"} {...others} />);
}

export default Component;
