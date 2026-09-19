import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa2e7s9da.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="aa2e7s9da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:sun-haze-fill"} {...others} />);
}

export default Component;
