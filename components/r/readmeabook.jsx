import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2nuqwbjn.css';
import '../../css/a/a252uws5j.css';
import '../../css/o/o5wwyrhwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2nuqwbjn"/><path class="a252uws5j"/><path class="o5wwyrhwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readmeabook"} {...others} />);
}

export default Component;
