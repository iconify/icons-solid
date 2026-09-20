import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mh26g7bii.css';
import '../../css/w/wsqxpmcli.css';
import '../../css/g/gri55clhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mh26g7bii"/><path clip-rule="evenodd" class="wsqxpmcli"/><path class="gri55clhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-speak"} {...others} />);
}

export default Component;
