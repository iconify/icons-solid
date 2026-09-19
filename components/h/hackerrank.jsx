import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taqnhk4cz.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="taqnhk4cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:hackerrank"} {...others} />);
}

export default Component;
