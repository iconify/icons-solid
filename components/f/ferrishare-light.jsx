import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2fq2cblr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q2fq2cblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ferrishare-light"} {...others} />);
}

export default Component;
