import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea74grkel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ea74grkel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:biohazard-fill-round"} {...others} />);
}

export default Component;
