import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5-mv2ddo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f5-mv2ddo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tired-face-with-sweat-in-circle"} {...others} />);
}

export default Component;
