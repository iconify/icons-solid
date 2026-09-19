import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyvfo3bjr.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="kyvfo3bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:zodiacgemini"} {...others} />);
}

export default Component;
