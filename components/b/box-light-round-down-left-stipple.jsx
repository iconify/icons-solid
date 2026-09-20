import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx42tzd2r.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="jx42tzd2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-round-down-left-stipple"} {...others} />);
}

export default Component;
