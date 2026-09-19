import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thp3xzwhd.css';
import '../../css/e/ez9lk7bui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thp3xzwhd"/><path class="ez9lk7bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:meat-filled"} {...others} />);
}

export default Component;
