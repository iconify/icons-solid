import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5kd2n3_d.css';
import '../../css/c/cvqusacuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5kd2n3_d"/><path class="cvqusacuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:times-circle"} {...others} />);
}

export default Component;
