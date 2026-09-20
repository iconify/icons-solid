import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw9j0hl2o.css';
import '../../css/y/ygse80efx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pw9j0hl2o"/><path class="ygse80efx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:uninstall-filled"} {...others} />);
}

export default Component;
