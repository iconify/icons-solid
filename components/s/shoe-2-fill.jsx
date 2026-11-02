import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7tbu7-pl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7tbu7-pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shoe-2-fill"} {...others} />);
}

export default Component;
