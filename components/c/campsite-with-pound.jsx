import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms_-knb5w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ms_-knb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-with-pound"} {...others} />);
}

export default Component;
