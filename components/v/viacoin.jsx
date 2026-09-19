import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbkmr_byi.css';

const viewBox = {"width":1536,"height":1792};
const content = `<path class="rbkmr_byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:viacoin"} {...others} />);
}

export default Component;
