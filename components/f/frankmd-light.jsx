import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy8dm9bqf.css';
import '../../css/u/uol-dpl7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sy8dm9bqf"/><path class="uol-dpl7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frankmd-light"} {...others} />);
}

export default Component;
