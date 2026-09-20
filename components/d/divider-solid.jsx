import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8zdvledd.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8zdvledd"/><path class="i7sr6ubzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:divider-solid"} {...others} />);
}

export default Component;
