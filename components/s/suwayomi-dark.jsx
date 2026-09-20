import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiz4a2b8e.css';
import '../../css/q/qat5inhjr.css';
import '../../css/s/shtujqapo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iiz4a2b8e"/><circle class="qat5inhjr"/><path class="shtujqapo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:suwayomi-dark"} {...others} />);
}

export default Component;
