import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8osuqbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l8osuqbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mental-health-24px"} {...others} />);
}

export default Component;
