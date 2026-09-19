import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv1ykgv5n.css';
import '../../css/x/x6w6rpbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jv1ykgv5n"/><path clip-rule="evenodd" class="x6w6rpbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:test-tube-outline"} {...others} />);
}

export default Component;
