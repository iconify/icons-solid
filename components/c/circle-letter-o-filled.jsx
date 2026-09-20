import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q86lr8bry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q86lr8bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-letter-o-filled"} {...others} />);
}

export default Component;
