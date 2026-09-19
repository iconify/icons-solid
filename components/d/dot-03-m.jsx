import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szu0jobmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szu0jobmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:dot-03-m"} {...others} />);
}

export default Component;
