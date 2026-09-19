import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhqgeeukd.css';
import '../../css/g/g97n7gbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vhqgeeukd"/><path class="g97n7gbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:towel-filled"} {...others} />);
}

export default Component;
