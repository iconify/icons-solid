import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcj6hkb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcj6hkb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:square-3-stack-3d"} {...others} />);
}

export default Component;
