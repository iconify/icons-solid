import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/o/ozbbj9b7k.css';
import '../../css/k/k7dd6nbtd.css';
import '../../css/c/c8y78fsed.css';
import '../../css/g/geifm5bgv.css';
import '../../css/i/ihr4t-53j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="ozbbj9b7k"/><path class="k7dd6nbtd"/><path class="c8y78fsed"/><path class="geifm5bgv"/><rect class="ihr4t-53j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dizzy-face"} {...others} />);
}

export default Component;
