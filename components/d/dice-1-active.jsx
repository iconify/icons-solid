import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uciu-_jsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uciu-_jsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:dice-1-active"} {...others} />);
}

export default Component;
