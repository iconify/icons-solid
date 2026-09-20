import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi2z2u4mn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="xi2z2u4mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:checker-large"} {...others} />);
}

export default Component;
