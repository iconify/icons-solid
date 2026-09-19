import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/naq8hacyq.css';
import '../../css/y/yj8iwvbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="naq8hacyq"/><path class="yj8iwvbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:world"} {...others} />);
}

export default Component;
