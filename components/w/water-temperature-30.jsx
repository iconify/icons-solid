import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m18fk9bwq.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="m18fk9bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:water-temperature-30"} {...others} />);
}

export default Component;
