import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkc3rh37p.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="wkc3rh37p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:photobucket"} {...others} />);
}

export default Component;
