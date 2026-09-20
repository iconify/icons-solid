import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv5w7ebwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fv5w7ebwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:consellation-solid"} {...others} />);
}

export default Component;
