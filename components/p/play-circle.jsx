import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq2lz_ujg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eq2lz_ujg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:play-circle"} {...others} />);
}

export default Component;
