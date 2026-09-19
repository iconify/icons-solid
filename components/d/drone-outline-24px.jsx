import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj78ek-bq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sj78ek-bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:drone-outline-24px"} {...others} />);
}

export default Component;
