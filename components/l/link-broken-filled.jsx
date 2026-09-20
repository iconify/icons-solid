import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr2ujbbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr2ujbbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link-broken-filled"} {...others} />);
}

export default Component;
