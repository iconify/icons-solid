import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_gz97l3s.css';
import '../../css/y/yn8-hpb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_gz97l3s"/><path class="yn8-hpb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:rocket"} {...others} />);
}

export default Component;
