import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5t6nbb6z.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b5t6nbb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:sound-recognition-search-remix"} {...others} />);
}

export default Component;
