import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss7r9ybtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ss7r9ybtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-sign-hairpin-turn-left-bold"} {...others} />);
}

export default Component;
