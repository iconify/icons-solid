import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2o_zuh-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2o_zuh-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-circle-selection-01"} {...others} />);
}

export default Component;
