import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvpr1296f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvpr1296f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:add-rhombus"} {...others} />);
}

export default Component;
