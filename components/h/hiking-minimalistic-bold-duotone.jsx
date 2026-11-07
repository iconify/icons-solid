import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5kxlh9of.css';
import '../../css/g/ggo_f5bme.css';
import '../../css/k/khoud0dhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5kxlh9of"/><path clip-rule="evenodd" class="ggo_f5bme"/><path class="khoud0dhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
