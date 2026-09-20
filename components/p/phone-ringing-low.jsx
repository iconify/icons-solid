import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit0tnbsg.css';
import '../../css/t/tag3qab8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hit0tnbsg"/><path class="tag3qab8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:phone-ringing-low"} {...others} />);
}

export default Component;
