import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgrvfsbqw.css';
import '../../css/y/yp597nbwy.css';
import '../../css/l/llx2mpo2y.css';
import '../../css/y/ymadvhj2q.css';
import '../../css/x/xr-krj0ht.css';
import '../../css/c/cv_v3t33h.css';
import '../../css/m/m09n-k8-c.css';
import '../../css/g/gfmbo18wr.css';
import '../../css/w/wwv3kbaoj.css';
import '../../css/g/ghius6_ic.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lgrvfsbqw"/><path class="yp597nbwy"/><circle class="llx2mpo2y"/><circle class="ymadvhj2q"/><circle class="xr-krj0ht"/><circle class="cv_v3t33h"/><circle class="m09n-k8-c"/><circle class="gfmbo18wr"/><path clip-rule="evenodd" class="wwv3kbaoj"/><path class="ghius6_ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:camera"} {...others} />);
}

export default Component;
