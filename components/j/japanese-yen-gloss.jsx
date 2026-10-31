import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ball2zbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ball2zbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:japanese-yen-gloss"} {...others} />);
}

export default Component;
