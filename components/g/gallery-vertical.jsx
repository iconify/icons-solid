import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9io2_wvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9io2_wvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:gallery-vertical"} {...others} />);
}

export default Component;
