import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gblmqib0s.css';
import '../../css/b/bzz90_zzg.css';
import '../../css/v/v9mei8nfi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 gblmqib0s"/><path class="bzz90_zzg clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 v9mei8nfi"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:network-globe-solid"} {...others} />);
}

export default Component;
