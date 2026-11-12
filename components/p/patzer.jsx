import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlrdzybyn.css';
import '../../css/y/yjo15eh2h.css';
import '../../css/z/z5-xgab6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hlrdzybyn"/><path class="yjo15eh2h"/><path class="z5-xgab6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:patzer"} {...others} />);
}

export default Component;
