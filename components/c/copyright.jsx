import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/n/ng-9hfbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="ng-9hfbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:copyright"} {...others} />);
}

export default Component;
