import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iucujub-t.css';
import '../../css/v/vqnxb9n8y.css';
import '../../css/t/tovf0wb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iucujub-t"/><path class="vqnxb9n8y"/><path class="tovf0wb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-card-remove-light"} {...others} />);
}

export default Component;
