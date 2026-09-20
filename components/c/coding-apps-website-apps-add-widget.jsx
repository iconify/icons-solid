import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgdcv4r6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgdcv4r6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-apps-add-widget"} {...others} />);
}

export default Component;
