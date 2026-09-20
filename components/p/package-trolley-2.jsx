import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/cr9ln6b1p.css';
import '../../css/f/f_xhw5bvk.css';
import '../../css/i/ixsl98qgd.css';
import '../../css/q/qp9emcbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="cr9ln6b1p"/><path class="f_xhw5bvk"/><path class="ixsl98qgd"/><path class="qp9emcbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:package-trolley-2"} {...others} />);
}

export default Component;
