import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3yggvbbt.css';
import '../../css/z/zgmduh90n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3yggvbbt"/><path class="zgmduh90n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:trend-arrow-up-duotone"} {...others} />);
}

export default Component;
