import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eb-jj88gg.css';
import '../../css/l/lnsj22bse.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="eb-jj88gg"/><path class="lnsj22bse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:sun"} {...others} />);
}

export default Component;
