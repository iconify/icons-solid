import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9v9tbc3a.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="t9v9tbc3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:eye-dropper-empty"} {...others} />);
}

export default Component;
