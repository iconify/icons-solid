import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af9r2o3oq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="af9r2o3oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:check-network"} {...others} />);
}

export default Component;
