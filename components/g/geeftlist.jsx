import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed6azwwva.css';
import '../../css/k/k65ziybib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ed6azwwva"/><path class="k65ziybib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:geeftlist"} {...others} />);
}

export default Component;
