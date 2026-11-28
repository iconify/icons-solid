import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn48pqbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sn48pqbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-u-turn-up-line-solid"} {...others} />);
}

export default Component;
