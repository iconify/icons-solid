import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnw29gb3g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gnw29gb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:volume-level-high-solid"} {...others} />);
}

export default Component;
