import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpzy0bbku.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rpzy0bbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:character-upper-case"} {...others} />);
}

export default Component;
