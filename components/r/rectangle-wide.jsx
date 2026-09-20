import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liotcnavo.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="liotcnavo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:rectangle-wide"} {...others} />);
}

export default Component;
