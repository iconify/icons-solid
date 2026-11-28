import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax6l9-l3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax6l9-l3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cup-soda-solid"} {...others} />);
}

export default Component;
