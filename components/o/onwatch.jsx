import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faxt378lm.css';
import '../../css/e/ezv3-gbwk.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="faxt378lm"/><path class="ezv3-gbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onwatch"} {...others} />);
}

export default Component;
