import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt0y82beq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xt0y82beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:align-horizontal-justify-end"} {...others} />);
}

export default Component;
