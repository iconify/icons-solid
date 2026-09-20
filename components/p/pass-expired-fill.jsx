import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahso_0mfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahso_0mfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pass-expired-fill"} {...others} />);
}

export default Component;
