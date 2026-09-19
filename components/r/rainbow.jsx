import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi4f11bjo.css';
import '../../css/e/eycsbubwb.css';
import '../../css/z/z4z9i4luq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wi4f11bjo"/><path class="eycsbubwb"/><path class="z4z9i4luq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:rainbow"} {...others} />);
}

export default Component;
