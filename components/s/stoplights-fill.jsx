import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzxtc-bwd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dzxtc-bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:stoplights-fill"} {...others} />);
}

export default Component;
