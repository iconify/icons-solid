import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uu754cc5i.css';
import '../../css/p/pkhc0-9tu.css';
import '../../css/m/m2hqnn58t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="uu754cc5i"/><path class="pkhc0-9tu"/><path class="m2hqnn58t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:ipod-classic-1"} {...others} />);
}

export default Component;
