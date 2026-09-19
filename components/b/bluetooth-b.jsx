import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qto7n0ozo.css';

const viewBox = {"width":960,"height":1792};
const content = `<path class="qto7n0ozo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bluetooth-b"} {...others} />);
}

export default Component;
