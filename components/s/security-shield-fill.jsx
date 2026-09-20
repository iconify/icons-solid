import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxy4-i9_f.css';
import '../../css/t/tbnr6-0gf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lxy4-i9_f"/><path class="tbnr6-0gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:security-shield-fill"} {...others} />);
}

export default Component;
