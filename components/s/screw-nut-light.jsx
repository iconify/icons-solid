import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgt55-51t.css';
import '../../css/j/jratsslgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgt55-51t"/><path class="jratsslgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:screw-nut-light"} {...others} />);
}

export default Component;
