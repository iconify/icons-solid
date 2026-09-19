import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/befr52blg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="befr52blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:target-poster"} {...others} />);
}

export default Component;
