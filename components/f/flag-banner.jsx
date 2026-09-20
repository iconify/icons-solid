import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkrb7h_yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mkrb7h_yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flag-banner"} {...others} />);
}

export default Component;
