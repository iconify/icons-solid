import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zn9tgxbfj.css';
import '../../css/y/y9_9c8pbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zn9tgxbfj"/><path class="y9_9c8pbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-actions-merge"} {...others} />);
}

export default Component;
