import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0q_w7t3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0q_w7t3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-github"} {...others} />);
}

export default Component;
