import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va62ij8gu.css';
import '../../css/t/t0cly4bsd.css';
import '../../css/c/cj1l5ubxv.css';
import '../../css/d/dgggh2b8d.css';
import '../../css/k/kauhh8s-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="va62ij8gu"/><path class="t0cly4bsd"/><path class="cj1l5ubxv"/><path class="dgggh2b8d"/><path class="kauhh8s-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingvin-share"} {...others} />);
}

export default Component;
