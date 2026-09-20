import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gafgfqgjb.css';
import '../../css/l/lnil9jecv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gafgfqgjb"/><path class="lnil9jecv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xsp"} {...others} />);
}

export default Component;
