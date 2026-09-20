import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx9ddnbmg.css';
import '../../css/j/jq8l55ojp.css';
import '../../css/r/r6q3ycj7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wx9ddnbmg"/><path class="jq8l55ojp"/><path class="r6q3ycj7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:picture-double-landscape-bold"} {...others} />);
}

export default Component;
