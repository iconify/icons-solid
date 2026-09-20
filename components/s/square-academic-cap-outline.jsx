import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgdj1qb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qgdj1qb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-outline"} {...others} />);
}

export default Component;
