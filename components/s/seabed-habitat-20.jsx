import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0ni6vb5b.css';
import '../../css/i/i75_mcddu.css';
import '../../css/g/gqyz_obje.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g0ni6vb5b"/><path class="i75_mcddu"/><path class="gqyz_obje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-habitat-20"} {...others} />);
}

export default Component;
