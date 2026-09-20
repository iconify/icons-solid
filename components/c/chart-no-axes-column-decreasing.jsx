import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7ads4bpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7ads4bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-no-axes-column-decreasing"} {...others} />);
}

export default Component;
