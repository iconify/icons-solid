import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcwmwoozx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bcwmwoozx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-right-up-solid"} {...others} />);
}

export default Component;
