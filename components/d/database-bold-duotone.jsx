import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj705hhir.css';
import '../../css/i/ios08bb7p.css';
import '../../css/x/xi4-07bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj705hhir"/><path class="ios08bb7p"/><path class="xi4-07bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:database-bold-duotone"} {...others} />);
}

export default Component;
