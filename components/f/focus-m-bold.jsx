import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tryhe-3gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tryhe-3gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:focus-m-bold"} {...others} />);
}

export default Component;
