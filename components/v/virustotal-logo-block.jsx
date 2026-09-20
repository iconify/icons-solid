import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfs6bob9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hfs6bob9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:virustotal-logo-block"} {...others} />);
}

export default Component;
