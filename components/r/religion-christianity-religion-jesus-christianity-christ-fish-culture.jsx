import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9hfk5b6p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y9hfk5b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:religion-christianity-religion-jesus-christianity-christ-fish-culture"} {...others} />);
}

export default Component;
