import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3nbq0pup.css';

const viewBox = {"width":1792,"height":1504};
const content = `<path class="u3nbq0pup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:commenting"} {...others} />);
}

export default Component;
