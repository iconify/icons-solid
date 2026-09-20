import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr637ppjg.css';
import '../../css/z/zqoqynd6k.css';
import '../../css/r/rt4s7qkqf.css';
import '../../css/b/bl1tbdczb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr637ppjg"/><path class="zqoqynd6k"/><path class="rt4s7qkqf"/><path class="bl1tbdczb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:quint"} {...others} />);
}

export default Component;
