import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_6apbah.css';
import '../../css/d/dnw8ephhm.css';
import '../../css/c/cdkh7bjct.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n1_6apbah"/><path class="dnw8ephhm"/><circle class="cdkh7bjct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:map-duotone"} {...others} />);
}

export default Component;
