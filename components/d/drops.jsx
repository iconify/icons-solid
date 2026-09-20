import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njf56ro9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="njf56ro9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:drops"} {...others} />);
}

export default Component;
