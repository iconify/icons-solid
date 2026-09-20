import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk6a7rbpz.css';
import '../../css/y/ya8a87bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sk6a7rbpz"/><path class="ya8a87bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reflect-down-bold"} {...others} />);
}

export default Component;
