import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srdcyza2r.css';
import '../../css/g/g7n3rd2ag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srdcyza2r"/><path class="g7n3rd2ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:discord"} {...others} />);
}

export default Component;
