import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwzk5mtti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cwzk5mtti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:user"} {...others} />);
}

export default Component;
