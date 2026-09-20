import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rot5gv2bf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rot5gv2bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:browser-error-remix"} {...others} />);
}

export default Component;
