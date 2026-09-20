import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cvq-p1amc.css';
import '../../css/v/vzaix_cqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cvq-p1amc"/><path class="vzaix_cqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:satellite-dish"} {...others} />);
}

export default Component;
