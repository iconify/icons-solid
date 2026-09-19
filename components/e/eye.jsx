import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xt5jzrbfu.css';
import '../../css/o/o04_5wrsd.css';
import '../../css/k/k8b-p3jys.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xt5jzrbfu"/><path class="o04_5wrsd"/><path class="k8b-p3jys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:eye"} {...others} />);
}

export default Component;
