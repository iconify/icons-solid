import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh2c8vt1h.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="bh2c8vt1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:rocket"} {...others} />);
}

export default Component;
