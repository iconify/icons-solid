import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fkhlm7bws.css';
import '../../css/n/n3euusb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fkhlm7bws"/><path class="n3euusb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-clip-logo"} {...others} />);
}

export default Component;
