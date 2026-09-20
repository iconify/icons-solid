import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6cs2jcph.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z6cs2jcph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:chopsticks-crossed"} {...others} />);
}

export default Component;
