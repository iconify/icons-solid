import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1zl0kh5v.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r1zl0kh5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:google-remix"} {...others} />);
}

export default Component;
