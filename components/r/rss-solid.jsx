import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/libkqqbsb.css';
import '../../css/u/u44crn52a.css';
import '../../css/a/af5m2ccgv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="libkqqbsb"/><path clip-rule="evenodd" class="u44crn52a"/><path class="af5m2ccgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:rss-solid"} {...others} />);
}

export default Component;
