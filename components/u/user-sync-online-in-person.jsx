import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v2c_4mb-r.css';
import '../../css/g/gb3y_ixts.css';
import '../../css/e/evcizfd1j.css';
import '../../css/c/c40uluucq.css';
import '../../css/p/pbn0gacpi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="v2c_4mb-r"/><path class="gb3y_ixts"/><path class="evcizfd1j"/><path class="c40uluucq"/><path class="pbn0gacpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-sync-online-in-person"} {...others} />);
}

export default Component;
