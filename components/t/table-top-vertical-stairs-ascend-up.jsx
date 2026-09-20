import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxm_88f5i.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="fxm_88f5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-vertical-stairs-ascend-up"} {...others} />);
}

export default Component;
