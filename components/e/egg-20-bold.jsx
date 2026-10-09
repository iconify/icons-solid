import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7cj1cc1l.css';
import '../../css/e/exm6e72le.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v7cj1cc1l"/><path class="exm6e72le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:egg-20-bold"} {...others} />);
}

export default Component;
