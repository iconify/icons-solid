import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3un9gaok.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3un9gaok"/><path class="c4946-17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-copy-bold"} {...others} />);
}

export default Component;
