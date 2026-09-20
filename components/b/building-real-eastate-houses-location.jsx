import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz0o1fpak.css';
import '../../css/b/btb5q7bii.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zz0o1fpak"/><path class="btb5q7bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-houses-location"} {...others} />);
}

export default Component;
