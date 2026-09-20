import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2c1qrbxz.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="y2c1qrbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:night-alt-hail"} {...others} />);
}

export default Component;
