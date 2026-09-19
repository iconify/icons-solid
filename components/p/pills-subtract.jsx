import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maueyoblv.css';
import '../../css/l/lk5_xc46y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="maueyoblv"/><path class="lk5_xc46y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pills-subtract"} {...others} />);
}

export default Component;
