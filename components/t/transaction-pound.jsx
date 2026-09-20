import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9gwzboyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9gwzboyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transaction-pound"} {...others} />);
}

export default Component;
