import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvwxi7bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvwxi7bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:lock-open-solid"} {...others} />);
}

export default Component;
