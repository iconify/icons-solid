import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8v29kb-y.css';
import '../../css/n/n0l6v6lws.css';
import '../../css/w/wizgh3bae.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o8v29kb-y"/><path class="n0l6v6lws"/><path class="wizgh3bae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spooty"} {...others} />);
}

export default Component;
