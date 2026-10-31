import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf54j2bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zf54j2bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:circle-dashed-solid"} {...others} />);
}

export default Component;
