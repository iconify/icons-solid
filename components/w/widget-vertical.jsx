import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv7lhtbjv.css';
import '../../css/b/bou7a7jit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv7lhtbjv"/><path class="bou7a7jit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget-vertical"} {...others} />);
}

export default Component;
