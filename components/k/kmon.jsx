import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awy6hv8rm.css';
import '../../css/x/xxg6e85ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awy6hv8rm"/><path class="xxg6e85ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kmon"} {...others} />);
}

export default Component;
