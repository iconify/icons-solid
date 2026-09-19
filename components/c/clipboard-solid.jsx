import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoe62lluo.css';
import '../../css/u/uy_7ftb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aoe62lluo"/><path class="uy_7ftb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:clipboard-solid"} {...others} />);
}

export default Component;
