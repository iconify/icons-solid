import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caz-d5aqz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="caz-d5aqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-sparks-remix"} {...others} />);
}

export default Component;
