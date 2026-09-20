import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efk5cf.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/d/dnm6ad.css';
import '../../css/h/h_evql.css';
import '../../css/z/z0edao.css';
import '../../css/u/uu-jvr.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efk5cf qa-o7h taf2xz"/><path class="dnm6ad qa-o7h taf2xz"/><path class="h_evql qa-o7h"/><path class="qa-o7h taf2xz z0edao"/><path class="qa-o7h taf2xz uu-jvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:clipboard-arrow"} {...others} />);
}

export default Component;
