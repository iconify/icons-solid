import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s68r3c0xg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s68r3c0xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nest-mini"} {...others} />);
}

export default Component;
