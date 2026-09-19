import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qidz9ubar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qidz9ubar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-three-quarter"} {...others} />);
}

export default Component;
