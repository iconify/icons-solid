import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6eo0_b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6eo0_b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:paperclip"} {...others} />);
}

export default Component;
