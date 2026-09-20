import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kws8bdc5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kws8bdc5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paperless-ngx"} {...others} />);
}

export default Component;
