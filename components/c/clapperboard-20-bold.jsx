import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh8z6bbpj.css';
import '../../css/k/kpsumujvs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mh8z6bbpj"/><path class="kpsumujvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clapperboard-20-bold"} {...others} />);
}

export default Component;
