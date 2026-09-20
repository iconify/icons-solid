import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sprp5wehn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sprp5wehn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:google-drive-alt"} {...others} />);
}

export default Component;
