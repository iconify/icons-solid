import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j33nzxbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j33nzxbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-book-pages-bold"} {...others} />);
}

export default Component;
