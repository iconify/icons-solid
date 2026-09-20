import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euvxs1b3r.css';
import '../../css/e/ej65opbwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="euvxs1b3r"/><path class="ej65opbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-app-laptop-1-bold"} {...others} />);
}

export default Component;
