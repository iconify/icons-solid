import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ksm5bpd.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="c7ksm5bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:speaker-1-fill"} {...others} />);
}

export default Component;
