import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8b-p0atb.css';
import '../../css/r/rw8uhq80v.css';
import '../../css/f/f6u8m20fx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8b-p0atb"/><path class="rw8uhq80v"/><path class="f6u8m20fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:boba"} {...others} />);
}

export default Component;
