import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr-9vqbve.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wr-9vqbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:globe-gasoline-pump-with-e"} {...others} />);
}

export default Component;
