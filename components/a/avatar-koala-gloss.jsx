import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nijwh4svl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nijwh4svl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-koala-gloss"} {...others} />);
}

export default Component;
