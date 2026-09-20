import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1u02hwni.css';
import '../../css/s/sn6-ywpbg.css';
import '../../css/i/i9sz-2b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a1u02hwni"/><path class="sn6-ywpbg"/><path class="i9sz-2b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:begging-hand-coin-2"} {...others} />);
}

export default Component;
