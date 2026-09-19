import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd5t3ac2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fd5t3ac2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:skateboarding-02"} {...others} />);
}

export default Component;
