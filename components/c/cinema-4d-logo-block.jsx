import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/impvs4byw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="impvs4byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cinema-4d-logo-block"} {...others} />);
}

export default Component;
