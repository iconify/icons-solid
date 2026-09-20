import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aps518b5a.css';
import '../../css/l/l41zmqbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aps518b5a"/><path class="l41zmqbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:weather-sun-bold"} {...others} />);
}

export default Component;
