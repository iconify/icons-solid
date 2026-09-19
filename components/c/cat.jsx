import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw-bh2b7p.css';
import '../../css/r/rmwwi5nky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uw-bh2b7p"/><path class="rmwwi5nky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:cat"} {...others} />);
}

export default Component;
