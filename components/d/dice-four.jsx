import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w22q1qmkw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w22q1qmkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dice-four"} {...others} />);
}

export default Component;
