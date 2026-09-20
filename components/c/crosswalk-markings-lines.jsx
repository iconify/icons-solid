import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlymt9bdv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hlymt9bdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crosswalk-markings-lines"} {...others} />);
}

export default Component;
