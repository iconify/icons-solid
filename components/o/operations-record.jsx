import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evzzowain.css';
import '../../css/p/p0vee9bvv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="evzzowain"/><path class="p0vee9bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:operations-record"} {...others} />);
}

export default Component;
