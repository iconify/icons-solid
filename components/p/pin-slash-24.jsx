import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygm273o1e.css';
import '../../css/f/frppt49pm.css';
import '../../css/f/f6krerb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygm273o1e"/><path class="frppt49pm"/><path class="f6krerb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:pin-slash-24"} {...others} />);
}

export default Component;
