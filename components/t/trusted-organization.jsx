import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2yx2bcgg.css';
import '../../css/u/urz-4cihd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2yx2bcgg"/><circle class="urz-4cihd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:trusted-organization"} {...others} />);
}

export default Component;
