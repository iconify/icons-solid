import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l01w4f3bq.css';
import '../../css/n/n6es8zk1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l01w4f3bq"/><path class="n6es8zk1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:settings-hammer"} {...others} />);
}

export default Component;
