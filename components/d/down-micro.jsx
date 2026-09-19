import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3vg0rc7o.css';

const viewBox = {"width":471,"height":1000};
const content = `<path class="s3vg0rc7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:down-micro"} {...others} />);
}

export default Component;
