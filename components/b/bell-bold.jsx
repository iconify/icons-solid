import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m92zv-bjj.css';
import '../../css/h/h71b5fbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m92zv-bjj"/><path class="h71b5fbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-bold"} {...others} />);
}

export default Component;
