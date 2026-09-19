import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjp4mac5a.css';

const viewBox = {"width":9,"height":16};
const content = `<path class="pjp4mac5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:caretleft"} {...others} />);
}

export default Component;
