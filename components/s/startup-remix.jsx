import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9nmr3btp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="v9nmr3btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:startup-remix"} {...others} />);
}

export default Component;
