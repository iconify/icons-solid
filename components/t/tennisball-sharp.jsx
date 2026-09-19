import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljrzvsbti.css';
import '../../css/o/ohubqmb2c.css';
import '../../css/x/xcd4ndbyv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ljrzvsbti"/><path class="ohubqmb2c"/><path class="xcd4ndbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:tennisball-sharp"} {...others} />);
}

export default Component;
