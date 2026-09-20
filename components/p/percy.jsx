import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e27bjtb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e27bjtb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:percy"} {...others} />);
}

export default Component;
