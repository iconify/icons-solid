import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi3ijvhgu.css';
import '../../css/s/sbwpxrb_g.css';
import '../../css/d/domh8bc3w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 xi3ijvhgu"/><path class="clr-i-solid clr-i-solid-path-2 sbwpxrb_g"/><path class="clr-i-solid clr-i-solid-path-3 domh8bc3w"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:backup-restore-solid"} {...others} />);
}

export default Component;
