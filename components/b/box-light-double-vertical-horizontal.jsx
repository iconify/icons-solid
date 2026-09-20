import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syqzq4b_v.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="syqzq4b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-double-vertical-horizontal"} {...others} />);
}

export default Component;
