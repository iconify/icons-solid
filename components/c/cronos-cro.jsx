import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj6hz_b4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj6hz_b4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:cronos-cro"} {...others} />);
}

export default Component;
