import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb7mribhr.css';
import '../../css/g/gt_-n5bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hb7mribhr"/><path class="gt_-n5bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movie-cinema-watch-bold"} {...others} />);
}

export default Component;
