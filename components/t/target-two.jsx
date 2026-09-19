import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/o/obna4oqji.css';
import '../../css/v/v0nd3ac9a.css';
import '../../css/e/ercysii-o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="obna4oqji"/><path class="v0nd3ac9a"/><path class="ercysii-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:target-two"} {...others} />);
}

export default Component;
