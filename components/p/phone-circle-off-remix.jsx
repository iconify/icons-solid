import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imvv0wbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="imvv0wbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:phone-circle-off-remix"} {...others} />);
}

export default Component;
