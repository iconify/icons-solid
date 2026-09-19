import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eod_tkbqu.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="eod_tkbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:grimace"} {...others} />);
}

export default Component;
