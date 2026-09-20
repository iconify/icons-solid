import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk1xw9dlw.css';
import '../../css/j/j7zkvzbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pk1xw9dlw"/><path class="j7zkvzbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gymnastics-ribbon-person-2-bold"} {...others} />);
}

export default Component;
