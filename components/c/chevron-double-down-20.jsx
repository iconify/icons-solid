import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laonxqbvy.css';
import '../../css/g/gmakb7b-g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="laonxqbvy"/><path class="gmakb7b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-down-20"} {...others} />);
}

export default Component;
