import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjx8q2jsf.css';
import '../../css/e/ez3axdbjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jjx8q2jsf"/><path class="ez3axdbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-20-bold"} {...others} />);
}

export default Component;
