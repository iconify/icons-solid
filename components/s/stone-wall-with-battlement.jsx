import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g04p4hb1s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g04p4hb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stone-wall-with-battlement"} {...others} />);
}

export default Component;
