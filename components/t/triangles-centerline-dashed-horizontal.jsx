import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak-_2kb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ak-_2kb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:triangles-centerline-dashed-horizontal"} {...others} />);
}

export default Component;
