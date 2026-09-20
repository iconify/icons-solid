import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgdh1dbhf.css';
import '../../css/p/pds7e2php.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sgdh1dbhf"/><path class="pds7e2php"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-2-bold-duotone"} {...others} />);
}

export default Component;
