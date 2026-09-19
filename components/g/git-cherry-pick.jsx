import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-m63qg-e.css';
import '../../css/p/pe7zzcn4c.css';
import '../../css/e/e6b6ro_mc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="c-m63qg-e"/><path class="pe7zzcn4c"/><path class="e6b6ro_mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:git-cherry-pick"} {...others} />);
}

export default Component;
