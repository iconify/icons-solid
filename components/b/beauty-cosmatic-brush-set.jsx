import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi01502br.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wi01502br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-cosmatic-brush-set"} {...others} />);
}

export default Component;
