import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbhhsu2jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbhhsu2jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:train-filled"} {...others} />);
}

export default Component;
