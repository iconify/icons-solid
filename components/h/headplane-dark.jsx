import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b89dqjg6u.css';
import '../../css/s/s39gonhkd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b89dqjg6u"/><path class="s39gonhkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:headplane-dark"} {...others} />);
}

export default Component;
