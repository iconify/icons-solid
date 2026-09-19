import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9cdyobop.css';
import '../../css/g/gzydm7bdl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v9cdyobop"/><path class="gzydm7bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:angle"} {...others} />);
}

export default Component;
