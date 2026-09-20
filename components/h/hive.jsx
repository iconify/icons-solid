import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-t-q3bzs.css';
import '../../css/s/s3ofesarg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-t-q3bzs"/><path class="s3ofesarg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hive"} {...others} />);
}

export default Component;
