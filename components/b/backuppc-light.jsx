import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em14apxum.css';
import '../../css/g/gdwzp4r6l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="em14apxum"/><path class="gdwzp4r6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:backuppc-light"} {...others} />);
}

export default Component;
