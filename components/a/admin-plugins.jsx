import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok8u8ubdw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ok8u8ubdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:admin-plugins"} {...others} />);
}

export default Component;
