import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwkj2k1fw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zwkj2k1fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:pet-animals-cat"} {...others} />);
}

export default Component;
