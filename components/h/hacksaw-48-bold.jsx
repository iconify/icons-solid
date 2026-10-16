import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar3qoibyd.css';
import '../../css/r/rtsvhsn1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ar3qoibyd"/><path class="rtsvhsn1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hacksaw-48-bold"} {...others} />);
}

export default Component;
