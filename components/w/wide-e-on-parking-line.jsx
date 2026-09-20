import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyse3869w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jyse3869w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-e-on-parking-line"} {...others} />);
}

export default Component;
