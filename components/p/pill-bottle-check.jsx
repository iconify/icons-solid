import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz7r0yydl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz7r0yydl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:pill-bottle-check"} {...others} />);
}

export default Component;
