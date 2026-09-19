import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg_f1--9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kg_f1--9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:stop-sign"} {...others} />);
}

export default Component;
