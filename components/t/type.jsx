import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb8-6ypcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kb8-6ypcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:type"} {...others} />);
}

export default Component;
