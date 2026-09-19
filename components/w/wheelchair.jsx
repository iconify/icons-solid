import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s01zth5am.css';

const viewBox = {"width":1632,"height":1760};
const content = `<path class="s01zth5am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wheelchair"} {...others} />);
}

export default Component;
