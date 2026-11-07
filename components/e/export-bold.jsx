import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2-z8pdzu.css';
import '../../css/s/sn_zd46fb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u2-z8pdzu"/><path class="sn_zd46fb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:export-bold"} {...others} />);
}

export default Component;
