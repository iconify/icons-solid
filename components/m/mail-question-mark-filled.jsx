import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foq2a6bdh.css';
import '../../css/m/mp780dcuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="foq2a6bdh"/><path class="mp780dcuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-question-mark-filled"} {...others} />);
}

export default Component;
