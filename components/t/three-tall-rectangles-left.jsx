import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7z0dvb5g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b7z0dvb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-tall-rectangles-left"} {...others} />);
}

export default Component;
