import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdjq2-vym.css';
import '../../css/x/xgndkg1rh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdjq2-vym"/><path class="xgndkg1rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-alt-duotone"} {...others} />);
}

export default Component;
