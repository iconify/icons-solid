import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3jfpwb1n.css';
import '../../css/f/fybwjzj0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s3jfpwb1n"/><path class="fybwjzj0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipping-logistic-damaged-package"} {...others} />);
}

export default Component;
