import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/e-aitgbuv.css';
import '../../css/o/otm091jdv.css';
import '../../css/n/n7dnrdbog.css';
import '../../css/y/yygslrbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="e-aitgbuv"/><path class="otm091jdv"/><path class="n7dnrdbog"/><path class="yygslrbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:delivery-truck-5"} {...others} />);
}

export default Component;
