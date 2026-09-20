import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3u62pbrn.css';
import '../../css/x/x839c0i8y.css';
import '../../css/y/y_7o9gs7y.css';
import '../../css/k/k31u2gbrh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h3u62pbrn"/><path class="x839c0i8y"/><path class="y_7o9gs7y"/><path class="k31u2gbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rubocop-light"} {...others} />);
}

export default Component;
