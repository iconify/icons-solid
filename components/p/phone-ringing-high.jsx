import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz0q_bwle.css';
import '../../css/o/ofqsw8bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz0q_bwle"/><path class="ofqsw8bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:phone-ringing-high"} {...others} />);
}

export default Component;
