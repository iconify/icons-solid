import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1uu-d19c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1uu-d19c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:approximately-equal"} {...others} />);
}

export default Component;
