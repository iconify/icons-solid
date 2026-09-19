import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7jhd1bei.css';

const viewBox = {"width":432,"height":448};
const content = `<path class="s7jhd1bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:coffee"} {...others} />);
}

export default Component;
