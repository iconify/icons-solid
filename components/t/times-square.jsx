import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah8y2-bwd.css';
import '../../css/n/n5kd2n3_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah8y2-bwd"/><path class="n5kd2n3_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:times-square"} {...others} />);
}

export default Component;
