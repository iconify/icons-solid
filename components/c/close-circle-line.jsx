import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkyvt9bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkyvt9bmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:close-circle-line"} {...others} />);
}

export default Component;
