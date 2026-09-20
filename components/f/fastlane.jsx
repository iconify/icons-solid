import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drtdhtb_j.css';
import '../../css/c/cqbmk1byz.css';
import '../../css/p/p5ypd6bpk.css';
import '../../css/q/qlqnfnb8d.css';
import '../../css/h/hxyfhfb3p.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="drtdhtb_j"/><path class="cqbmk1byz"/><path class="p5ypd6bpk"/><path class="qlqnfnb8d"/><path class="hxyfhfb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:fastlane"} {...others} />);
}

export default Component;
