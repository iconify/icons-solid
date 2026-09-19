import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or6rs0b6f.css';
import '../../css/s/sbv08dh1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or6rs0b6f"/><path class="sbv08dh1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:notification"} {...others} />);
}

export default Component;
