import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/a/ab2lhwbpp.css';
import '../../css/z/z5959tbft.css';
import '../../css/x/xlw9t-4mj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ab2lhwbpp"/><circle class="z5959tbft"/><path class="xlw9t-4mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radio-nanny"} {...others} />);
}

export default Component;
