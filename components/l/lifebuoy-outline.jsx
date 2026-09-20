import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebc1v__7u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ebc1v__7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:lifebuoy-outline"} {...others} />);
}

export default Component;
