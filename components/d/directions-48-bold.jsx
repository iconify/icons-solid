import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqnn4pbcu.css';
import '../../css/y/ykmr2x2jm.css';
import '../../css/c/cc2lz2byb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iqnn4pbcu"/><path class="ykmr2x2jm"/><path class="cc2lz2byb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:directions-48-bold"} {...others} />);
}

export default Component;
