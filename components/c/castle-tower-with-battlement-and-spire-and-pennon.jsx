import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzt1dacmz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jzt1dacmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:castle-tower-with-battlement-and-spire-and-pennon"} {...others} />);
}

export default Component;
