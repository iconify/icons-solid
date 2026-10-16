import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf-q9zggw.css';
import '../../css/y/y4-jdzhel.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kf-q9zggw"/><path class="y4-jdzhel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microplastics-20"} {...others} />);
}

export default Component;
