import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cio1c0bky.css';
import '../../css/a/ave95yb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cio1c0bky"/><path class="ave95yb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:send-email-fly-bold"} {...others} />);
}

export default Component;
