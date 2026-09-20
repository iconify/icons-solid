import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oceqrzbjx.css';
import '../../css/p/p2_f0-rsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oceqrzbjx"/><path class="p2_f0-rsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rotten-tomatoes"} {...others} />);
}

export default Component;
