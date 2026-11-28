import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tryzyvb9o.css';
import '../../css/k/kftm6xogs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tryzyvb9o"/><path class="kftm6xogs primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hexagon-duo"} {...others} />);
}

export default Component;
