import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vug20nb6u.css';
import '../../css/c/cfm66s3uf.css';
import '../../css/b/bfjbb2-nr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vug20nb6u"/><path class="cfm66s3uf"/><path class="bfjbb2-nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhel-dark"} {...others} />);
}

export default Component;
