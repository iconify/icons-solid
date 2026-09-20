import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du81u6b2b.css';
import '../../css/u/ut-e98spq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du81u6b2b"/><path class="ut-e98spq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:synchronize-arrows"} {...others} />);
}

export default Component;
