import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvfhn7b8l.css';

const viewBox = {"width":999,"height":1000};
const content = `<path class="fvfhn7b8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-unhappy"} {...others} />);
}

export default Component;
