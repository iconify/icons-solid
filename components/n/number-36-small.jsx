import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4zsyiic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh4zsyiic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-36-small"} {...others} />);
}

export default Component;
