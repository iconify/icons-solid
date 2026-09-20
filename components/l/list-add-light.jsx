import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qehc4-_kv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qehc4-_kv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:list-add-light"} {...others} />);
}

export default Component;
