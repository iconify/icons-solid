import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/berfx5bid.css';
import '../../css/x/xvhi1u9pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="berfx5bid"/><path class="xvhi1u9pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:python"} {...others} />);
}

export default Component;
