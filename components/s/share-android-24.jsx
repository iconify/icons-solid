import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw9jp9b-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw9jp9b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:share-android-24"} {...others} />);
}

export default Component;
