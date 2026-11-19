import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekqqo4byp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekqqo4byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rabet"} {...others} />);
}

export default Component;
