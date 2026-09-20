import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/phxdz-poi.css';
import '../../css/q/qx_a1cqbh.css';
import '../../css/t/t-c46r-6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="phxdz-poi"/><path class="qx_a1cqbh"/><path class="t-c46r-6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:control-next"} {...others} />);
}

export default Component;
