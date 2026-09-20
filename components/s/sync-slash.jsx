import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9zs5b_ml.css';
import '../../css/y/ymqqe9y8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9zs5b_ml"/><path class="ymqqe9y8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sync-slash"} {...others} />);
}

export default Component;
