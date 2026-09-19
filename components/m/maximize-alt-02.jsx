import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh60tvb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh60tvb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:maximize-alt-02"} {...others} />);
}

export default Component;
