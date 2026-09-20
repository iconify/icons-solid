import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9rjdsbfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9rjdsbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trash-x"} {...others} />);
}

export default Component;
