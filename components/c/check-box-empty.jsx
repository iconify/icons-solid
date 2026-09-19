import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_nmbcf5j.css';

const viewBox = {"width":304,"height":448};
const content = `<path class="s_nmbcf5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:check-box-empty"} {...others} />);
}

export default Component;
