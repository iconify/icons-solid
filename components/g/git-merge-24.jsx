import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwg56qbut.css';
import '../../css/t/tcv0pgcak.css';
import '../../css/u/ungwd2b5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nwg56qbut"/><path class="tcv0pgcak"/><path class="ungwd2b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-merge-24"} {...others} />);
}

export default Component;
