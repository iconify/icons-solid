import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnbsg9ofn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnbsg9ofn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:check-double"} {...others} />);
}

export default Component;
