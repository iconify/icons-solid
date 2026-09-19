import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzi7qo5ju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzi7qo5ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:share-ios-export"} {...others} />);
}

export default Component;
