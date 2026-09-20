import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_pr9ks0t.css';
import '../../css/c/czhl_6b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_pr9ks0t"/><path class="czhl_6b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:image-file-star-bold"} {...others} />);
}

export default Component;
