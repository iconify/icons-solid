import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwhb53btz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mwhb53btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffee-mug-and-pawprint"} {...others} />);
}

export default Component;
