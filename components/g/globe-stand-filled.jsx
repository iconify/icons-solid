import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka6cs0bzz.css';
import '../../css/r/rek-56b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ka6cs0bzz"/><path class="rek-56b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-stand-filled"} {...others} />);
}

export default Component;
