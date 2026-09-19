import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecobcdb3u.css';
import '../../css/t/tgdfm4b2x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ecobcdb3u"/><path class="tgdfm4b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:user-check"} {...others} />);
}

export default Component;
