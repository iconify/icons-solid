import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6pd-lbze.css';
import '../../css/r/rr-fqzblh.css';
import '../../css/u/u4ilukxus.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="q6pd-lbze"/><rect class="rr-fqzblh"/><rect class="u4ilukxus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rows-3-filled"} {...others} />);
}

export default Component;
