import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl2o4cc0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl2o4cc0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:warehouse-filled"} {...others} />);
}

export default Component;
