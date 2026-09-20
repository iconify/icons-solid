import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx3_xqbix.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jx3_xqbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wave-signal-flat"} {...others} />);
}

export default Component;
