import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b04z-5r7l.css';
import '../../css/h/h848uabup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b04z-5r7l"/><path class="h848uabup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bandage"} {...others} />);
}

export default Component;
