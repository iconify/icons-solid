import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h13n8sbqy.css';

const viewBox = {"width":216,"height":488};
const content = `<path class="h13n8sbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:instapaper"} {...others} />);
}

export default Component;
