import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohonk9mbe.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ohonk9mbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:play-rectangle-fill"} {...others} />);
}

export default Component;
