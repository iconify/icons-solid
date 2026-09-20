import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb5b0n5vc.css';
import '../../css/b/bcvzlnbri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mb5b0n5vc"/><path class="bcvzlnbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freshrss"} {...others} />);
}

export default Component;
