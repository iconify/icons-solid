import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-b8ddqqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e-b8ddqqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:grooveshark-logo-solid"} {...others} />);
}

export default Component;
