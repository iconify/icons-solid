import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asbr8qs0c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="asbr8qs0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:4k-filled"} {...others} />);
}

export default Component;
