import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk14lcqmb.css';
import '../../css/y/ykaofac9m.css';
import '../../css/k/kdnfubntr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tk14lcqmb"/><path class="ykaofac9m"/><path clip-rule="evenodd" class="kdnfubntr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:3d-print"} {...others} />);
}

export default Component;
