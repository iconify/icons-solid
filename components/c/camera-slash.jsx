import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7w50vvhh.css';
import '../../css/r/rgxtolv2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7w50vvhh"/><path class="rgxtolv2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-slash"} {...others} />);
}

export default Component;
