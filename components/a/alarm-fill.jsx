import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhdob0q5v.css';
import '../../css/x/xli-_5yuc.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rhdob0q5v"/><path class="xli-_5yuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:alarm-fill"} {...others} />);
}

export default Component;
