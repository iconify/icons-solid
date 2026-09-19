import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riwpk_voa.css';

const viewBox = {"width":14,"height":24};
const content = `<path class="riwpk_voa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:jekyll"} {...others} />);
}

export default Component;
