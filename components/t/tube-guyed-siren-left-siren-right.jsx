import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5d2v1bhr.css';
import '../../css/w/wyn_vbbql.css';
import '../../css/p/pi1ial8rd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v5d2v1bhr"/><path class="wyn_vbbql"/><path class="pi1ial8rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tube-guyed-siren-left-siren-right"} {...others} />);
}

export default Component;
