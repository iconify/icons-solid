import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aly2rpw4i.css';
import '../../css/s/sejfddchz.css';
import '../../css/b/bfilv4bxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aly2rpw4i"/><path class="sejfddchz"/><path class="bfilv4bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pola"} {...others} />);
}

export default Component;
