import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or0-msbfm.css';
import '../../css/q/qtdly1ban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or0-msbfm"/><path class="qtdly1ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:at-sign"} {...others} />);
}

export default Component;
