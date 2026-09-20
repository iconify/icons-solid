import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tia1afx0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tia1afx0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:vector-arrange-below"} {...others} />);
}

export default Component;
