import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpg556eqh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tpg556eqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-for-sale"} {...others} />);
}

export default Component;
