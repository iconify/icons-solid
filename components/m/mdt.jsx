import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdoiz26ay.css';
import '../../css/t/tc6em5bpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdoiz26ay"/><path class="tc6em5bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mdt"} {...others} />);
}

export default Component;
