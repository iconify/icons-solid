import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnwaqn2lw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnwaqn2lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:plane-departure"} {...others} />);
}

export default Component;
