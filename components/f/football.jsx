import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8_3nubjg.css';
import '../../css/s/skvu_5_5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8_3nubjg"/><path class="skvu_5_5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:football"} {...others} />);
}

export default Component;
