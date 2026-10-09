import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g63ekpb2v.css';
import '../../css/m/mq8znxbqs.css';
import '../../css/u/u5dr5zbvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g63ekpb2v"/><path class="mq8znxbqs"/><path class="u5dr5zbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cocktail-20"} {...others} />);
}

export default Component;
