import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8bfibb-k.css';
import '../../css/b/bkk4-bbas.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y8bfibb-k"/><path class="bkk4-bbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-hospital-building-1"} {...others} />);
}

export default Component;
