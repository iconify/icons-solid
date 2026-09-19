import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0kol9bky.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l0kol9bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:arrow-up-left"} {...others} />);
}

export default Component;
