import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvz1-rbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvz1-rbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:checkbox-on-sharp"} {...others} />);
}

export default Component;
