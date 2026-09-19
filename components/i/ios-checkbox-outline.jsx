import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9m2_kb3v.css';
import '../../css/d/d9vrg4bmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9m2_kb3v"/><path class="d9vrg4bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-checkbox-outline"} {...others} />);
}

export default Component;
