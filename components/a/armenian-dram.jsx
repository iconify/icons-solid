import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sksg1bb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sksg1bb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:armenian-dram"} {...others} />);
}

export default Component;
