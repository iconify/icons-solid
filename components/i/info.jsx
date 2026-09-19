import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk_fp9bqw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jk_fp9bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:info"} {...others} />);
}

export default Component;
