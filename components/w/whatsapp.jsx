import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk04yo4uu.css';
import '../../css/w/w7ieg6b4v.css';
import '../../css/r/rc8h5_bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="gk04yo4uu"/><circle class="w7ieg6b4v"/><path class="rc8h5_bqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:whatsapp"} {...others} />);
}

export default Component;
