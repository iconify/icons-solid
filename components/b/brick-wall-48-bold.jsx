import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wffgbluit.css';
import '../../css/g/gl49t146u.css';
import '../../css/s/s5hl0o4ib.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wffgbluit"/><path class="gl49t146u"/><path class="s5hl0o4ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brick-wall-48-bold"} {...others} />);
}

export default Component;
