import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxqwbu3yg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxqwbu3yg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ephemera-dark"} {...others} />);
}

export default Component;
