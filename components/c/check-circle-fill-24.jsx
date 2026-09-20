import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkdtg4bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkdtg4bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:check-circle-fill-24"} {...others} />);
}

export default Component;
