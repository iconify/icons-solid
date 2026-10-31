import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdftbpbaj.css';
import '../../css/m/m26ewvbtd.css';
import '../../css/g/gw6wfjnqh.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wdftbpbaj"/><path class="m26ewvbtd"/><path class="gw6wfjnqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:turkey"} {...others} />);
}

export default Component;
