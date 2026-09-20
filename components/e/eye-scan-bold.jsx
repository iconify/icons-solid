import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xotmi9s3j.css';
import '../../css/z/zp9o7jbax.css';
import '../../css/y/y3-63wbqa.css';
import '../../css/g/g9q_05mlr.css';
import '../../css/x/xz-t-ab9k.css';
import '../../css/y/yv8vo0bzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xotmi9s3j"/><path class="zp9o7jbax"/><path class="y3-63wbqa"/><path class="g9q_05mlr"/><path class="xz-t-ab9k"/><path clip-rule="evenodd" class="yv8vo0bzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-scan-bold"} {...others} />);
}

export default Component;
