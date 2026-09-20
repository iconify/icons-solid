import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq5yukqvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eq5yukqvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mixx-logo-block"} {...others} />);
}

export default Component;
