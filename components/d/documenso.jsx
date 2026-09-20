import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe2_ycbjb.css';
import '../../css/f/ft_gti1us.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xe2_ycbjb"/><path class="ft_gti1us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:documenso"} {...others} />);
}

export default Component;
