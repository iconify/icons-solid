import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1xo7-eok.css';
import '../../css/r/rr_64kzjn.css';
import '../../css/l/lxxd1u4jy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v1xo7-eok"/><path class="rr_64kzjn"/><path class="lxxd1u4jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archery-48-bold"} {...others} />);
}

export default Component;
