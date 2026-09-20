import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxgrrx8od.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxgrrx8od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:align-center-bold"} {...others} />);
}

export default Component;
