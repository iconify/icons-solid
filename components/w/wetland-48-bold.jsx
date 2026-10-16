import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrlmjdbsl.css';
import '../../css/d/ds62anbdy.css';
import '../../css/z/za_fk3z0n.css';
import '../../css/o/oz5t4ccvy.css';
import '../../css/x/x3rphebkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wrlmjdbsl"/><path class="ds62anbdy"/><path class="za_fk3z0n"/><path class="oz5t4ccvy"/><path class="x3rphebkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wetland-48-bold"} {...others} />);
}

export default Component;
