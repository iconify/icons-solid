import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjx8q2jsf.css';
import '../../css/j/jwge04g2v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jjx8q2jsf"/><path class="jwge04g2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-20-bold"} {...others} />);
}

export default Component;
