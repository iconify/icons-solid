import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o16ffbc_p.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="o16ffbc_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:left-hook-arrow-small-filled"} {...others} />);
}

export default Component;
