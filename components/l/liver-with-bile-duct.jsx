import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyojgbk_j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gyojgbk_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:liver-with-bile-duct"} {...others} />);
}

export default Component;
