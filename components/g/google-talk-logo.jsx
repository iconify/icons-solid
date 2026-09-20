import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w6wnjq9db.css';
import '../../css/l/l--0jzb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="w6wnjq9db"/><path class="l--0jzb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-talk-logo"} {...others} />);
}

export default Component;
