import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea7r9xsmx.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ea7r9xsmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:screen-dub-o"} {...others} />);
}

export default Component;
