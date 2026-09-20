import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l548n4rzz.css';
import '../../css/p/p9uwirbpd.css';
import '../../css/q/qk_yb2bju.css';
import '../../css/q/qa9rw79co.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l548n4rzz"/><path class="p9uwirbpd"/><path class="qk_yb2bju"/><path class="qa9rw79co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:airtable"} {...others} />);
}

export default Component;
