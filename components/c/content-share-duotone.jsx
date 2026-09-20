import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl9nzzbwz.css';
import '../../css/w/w65rdobqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jl9nzzbwz"/><path clip-rule="evenodd" class="w65rdobqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:content-share-duotone"} {...others} />);
}

export default Component;
