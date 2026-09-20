import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-9-kkb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q-9-kkb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:diigo-logo-3-block"} {...others} />);
}

export default Component;
