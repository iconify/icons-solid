import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa_5deg5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa_5deg5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:upload-lock-outline"} {...others} />);
}

export default Component;
