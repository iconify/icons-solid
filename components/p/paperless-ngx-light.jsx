import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbb4g5h2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zbb4g5h2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paperless-ngx-light"} {...others} />);
}

export default Component;
