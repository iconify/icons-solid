import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1y6o2db.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="py1y6o2db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:four-legged-octopus-with-cartoon-eyes"} {...others} />);
}

export default Component;
