import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a5_1hvbhu.css';
import '../../css/x/xcnzjfvig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a5_1hvbhu"/><path class="xcnzjfvig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-angle-line-duotone"} {...others} />);
}

export default Component;
