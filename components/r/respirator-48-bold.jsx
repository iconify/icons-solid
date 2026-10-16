import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsw62-7zd.css';
import '../../css/i/iib416bcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bsw62-7zd"/><path class="iib416bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:respirator-48-bold"} {...others} />);
}

export default Component;
