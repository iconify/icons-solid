import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orkh5bv4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="orkh5bv4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:siren-off-sharp"} {...others} />);
}

export default Component;
