import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kqf6v92ds.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/z/zbsejdb_i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kqf6v92ds"/><circle class="xcv6q1bnv"/><circle class="zbsejdb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-lifebuoy-water-life-ring-wheely-lifebelt-kisbee"} {...others} />);
}

export default Component;
