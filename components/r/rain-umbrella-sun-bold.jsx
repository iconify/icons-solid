import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjh0rhbxf.css';
import '../../css/w/w-b8g4otv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjh0rhbxf"/><path class="w-b8g4otv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rain-umbrella-sun-bold"} {...others} />);
}

export default Component;
