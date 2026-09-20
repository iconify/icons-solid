import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2be9pn4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e2be9pn4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:oracle-logo-block"} {...others} />);
}

export default Component;
