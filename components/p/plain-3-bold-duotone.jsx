import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecxmxhl9m.css';
import '../../css/u/uhv43pf8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ecxmxhl9m"/><path class="uhv43pf8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-3-bold-duotone"} {...others} />);
}

export default Component;
