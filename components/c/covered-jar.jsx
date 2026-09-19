import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o66gqk1ks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o66gqk1ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:covered-jar"} {...others} />);
}

export default Component;
