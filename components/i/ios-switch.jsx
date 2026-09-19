import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzqxore6r.css';
import '../../css/i/i6-ceabdw.css';
import '../../css/i/itgcd8bme.css';
import '../../css/p/p6-i0mbfr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="uzqxore6r"/><path class="i6-ceabdw"/><circle class="itgcd8bme"/><path class="p6-i0mbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-switch"} {...others} />);
}

export default Component;
