import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skc3wybvf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="skc3wybvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-access-locked"} {...others} />);
}

export default Component;
