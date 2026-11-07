import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9y477w0i.css';
import '../../css/e/en0qu8tuo.css';
import '../../css/a/attm18beq.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n9y477w0i"/><path class="en0qu8tuo"/><path class="attm18beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-close-bold-duotone"} {...others} />);
}

export default Component;
