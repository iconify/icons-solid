import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs_ds4bwb.css';
import '../../css/t/t1tvrdn3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bs_ds4bwb"/><path class="t1tvrdn3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:delivery-truck"} {...others} />);
}

export default Component;
