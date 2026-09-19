import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/useoh5bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="useoh5bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:signal-1"} {...others} />);
}

export default Component;
