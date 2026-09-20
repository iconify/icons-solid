import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sklr68b5u.css';
import '../../css/r/rkkr41y9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sklr68b5u"/><path class="rkkr41y9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-alipay-filled"} {...others} />);
}

export default Component;
