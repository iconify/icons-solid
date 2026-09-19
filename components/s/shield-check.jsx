import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0ei_2o1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="l0ei_2o1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:shield-check"} {...others} />);
}

export default Component;
