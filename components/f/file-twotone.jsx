import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kilinm.css';
import '../../css/k/kyznsp.css';
import '../../css/k/k50i_c.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kilinm kyznsp"/><path class="k50i_c kyznsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-twotone"} {...others} />);
}

export default Component;
