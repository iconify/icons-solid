import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc1ytd_oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kc1ytd_oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:lock-fill"} {...others} />);
}

export default Component;
