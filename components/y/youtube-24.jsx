import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpwxbbc7k.css';
import '../../css/n/n0w792bml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gpwxbbc7k"/><path clip-rule="evenodd" class="n0w792bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:youtube-24"} {...others} />);
}

export default Component;
