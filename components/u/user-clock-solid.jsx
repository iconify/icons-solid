import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx20rqbza.css';
import '../../css/m/m94p08b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx20rqbza"/><path clip-rule="evenodd" class="m94p08b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:user-clock-solid"} {...others} />);
}

export default Component;
