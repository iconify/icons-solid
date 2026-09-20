import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yipiq0bie.css';
import '../../css/a/ag0fqubbm.css';
import '../../css/b/b10cdoboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yipiq0bie"/><path class="ag0fqubbm"/><path clip-rule="evenodd" class="b10cdoboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aura"} {...others} />);
}

export default Component;
