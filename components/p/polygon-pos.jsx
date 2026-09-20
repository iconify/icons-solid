import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2u1e0bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2u1e0bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:polygon-pos"} {...others} />);
}

export default Component;
