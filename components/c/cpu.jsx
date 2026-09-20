import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xykb5e5ao.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xykb5e5ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cpu"} {...others} />);
}

export default Component;
