import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcis7r43e.css';
import '../../css/r/rgfwyacmh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xcis7r43e"/><path class="rgfwyacmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:battery-charging"} {...others} />);
}

export default Component;
