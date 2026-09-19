import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv1g0uw2g.css';
import '../../css/p/phh4k69ce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sv1g0uw2g"/><path class="phh4k69ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:user-plus-outline"} {...others} />);
}

export default Component;
