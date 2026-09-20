import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pat2y4biv.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="pat2y4biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:home-thatched"} {...others} />);
}

export default Component;
