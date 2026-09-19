import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egkp_3bbf.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="egkp_3bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:chevron-down"} {...others} />);
}

export default Component;
