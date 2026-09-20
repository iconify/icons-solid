import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd6mtdb1u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gd6mtdb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-healthy-food-dish"} {...others} />);
}

export default Component;
