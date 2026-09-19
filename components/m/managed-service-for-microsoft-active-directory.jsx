import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v681d4kxi.css';
import '../../css/m/m9546-bru.css';
import '../../css/q/qr5uq8k0o.css';
import '../../css/m/m1lw9kb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v681d4kxi"/><path class="m9546-bru"/><path class="qr5uq8k0o"/><path class="m1lw9kb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:managed-service-for-microsoft-active-directory"} {...others} />);
}

export default Component;
