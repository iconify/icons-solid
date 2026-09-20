import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec5cx6f6r.css';
import '../../css/f/fnicxpbzz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ec5cx6f6r"/><path class="fnicxpbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:single-user-shield"} {...others} />);
}

export default Component;
