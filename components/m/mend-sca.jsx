import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3re52bcw.css';
import '../../css/r/rv5qggquv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k3re52bcw"/><path class="rv5qggquv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mend-sca"} {...others} />);
}

export default Component;
