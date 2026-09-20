import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e50zsvy-u.css';
import '../../css/f/f-c4afb0q.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="e50zsvy-u"/><path class="f-c4afb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sort-alphabetical"} {...others} />);
}

export default Component;
