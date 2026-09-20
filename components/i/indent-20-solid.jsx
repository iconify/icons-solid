import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_x3e4-7u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b_x3e4-7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:indent-20-solid"} {...others} />);
}

export default Component;
