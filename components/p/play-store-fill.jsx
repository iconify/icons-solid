import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0t26ccmo.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v0t26ccmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:play-store-fill"} {...others} />);
}

export default Component;
