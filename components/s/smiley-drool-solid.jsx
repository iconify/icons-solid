import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un7b5bcgs.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="un7b5bcgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-drool-solid"} {...others} />);
}

export default Component;
