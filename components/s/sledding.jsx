import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io_ltac6m.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="io_ltac6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:sledding"} {...others} />);
}

export default Component;
