import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssv2r9bnu.css';
import '../../css/o/o2pei4b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssv2r9bnu"/><path class="o2pei4b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:garbage-bin-bold"} {...others} />);
}

export default Component;
