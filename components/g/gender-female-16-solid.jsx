import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weuip4crh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="weuip4crh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gender-female-16-solid"} {...others} />);
}

export default Component;
