import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/r/rbbp18b7d.css';
import '../../css/h/h405dk_xs.css';
import '../../css/l/lh-4h4hzb.css';
import '../../css/p/peb5hlbzf.css';
import '../../css/o/ojgx84bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="rbbp18b7d"/><path class="h405dk_xs"/><path class="lh-4h4hzb"/><path class="peb5hlbzf"/><path class="ojgx84bkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:programming-share"} {...others} />);
}

export default Component;
