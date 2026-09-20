import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0ye1rhvu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h0ye1rhvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pharmacy-remix"} {...others} />);
}

export default Component;
