import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfby4ebsr.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pfby4ebsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:h5-20-solid"} {...others} />);
}

export default Component;
