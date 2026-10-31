import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsygsj3iv.css';
import '../../css/z/z90hmcu9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xsygsj3iv"/><path class="z90hmcu9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:twitch-duocolor-round"} {...others} />);
}

export default Component;
