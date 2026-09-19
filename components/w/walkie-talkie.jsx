import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2ngn6fhw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t2ngn6fhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:walkie-talkie"} {...others} />);
}

export default Component;
