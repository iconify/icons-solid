import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a99q0yb7p.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a99q0yb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-outdated-fill-12"} {...others} />);
}

export default Component;
