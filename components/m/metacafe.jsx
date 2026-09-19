import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8z7ab9xl.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="v8z7ab9xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:metacafe"} {...others} />);
}

export default Component;
