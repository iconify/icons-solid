import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-yovpx2o.css';
import '../../css/y/ywduolbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-yovpx2o"/><path class="ywduolbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:diff-modified-24"} {...others} />);
}

export default Component;
