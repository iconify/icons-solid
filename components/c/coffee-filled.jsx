import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqq2j3bkt.css';
import '../../css/e/esv5bmbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqq2j3bkt"/><path class="esv5bmbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:coffee-filled"} {...others} />);
}

export default Component;
