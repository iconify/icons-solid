import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2fxoablb.css';
import '../../css/m/mru10lbki.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h2fxoablb"/><path class="mru10lbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon"} {...others} />);
}

export default Component;
