import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj4d1uf6r.css';
import '../../css/i/iscnj5bzx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qj4d1uf6r"/><path class="iscnj5bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-sleep"} {...others} />);
}

export default Component;
