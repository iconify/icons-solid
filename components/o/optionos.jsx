import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eulpr3bjr.css';
import '../../css/r/rw8aspbhl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="eulpr3bjr"/><path class="rw8aspbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:optionos"} {...others} />);
}

export default Component;
