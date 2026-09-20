import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc-gqt2en.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc-gqt2en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:align-vertical-justify-start-sharp"} {...others} />);
}

export default Component;
