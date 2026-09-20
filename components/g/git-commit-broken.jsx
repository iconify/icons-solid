import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sduv6uq4w.css';
import '../../css/w/wb4foqv9f.css';
import '../../css/z/zmbwsz-_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sduv6uq4w"/><path class="wb4foqv9f"/><path class="zmbwsz-_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-commit-broken"} {...others} />);
}

export default Component;
