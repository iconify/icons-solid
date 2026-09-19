import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkrlu3b7c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lkrlu3b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:snapchat"} {...others} />);
}

export default Component;
