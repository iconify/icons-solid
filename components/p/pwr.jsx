import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcoh9zb5r.css';
import '../../css/b/bve8ubjqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcoh9zb5r"/><path class="bve8ubjqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pwr"} {...others} />);
}

export default Component;
