import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbqdbrx2k.css';
import '../../css/b/blyza-nqz.css';
import '../../css/u/uj15wsh5f.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 sbqdbrx2k"/><path class="blyza-nqz clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 uj15wsh5f"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:data-cluster-solid"} {...others} />);
}

export default Component;
