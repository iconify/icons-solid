import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqtnv3iqd.css';
import '../../css/a/ayeh84bwp.css';
import '../../css/b/bcsn64b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqtnv3iqd"/><path class="ayeh84bwp"/><path clip-rule="evenodd" class="bcsn64b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-bold"} {...others} />);
}

export default Component;
