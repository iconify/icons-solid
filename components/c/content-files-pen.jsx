import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps9lkiisw.css';
import '../../css/o/oh5vljisv.css';
import '../../css/r/rlcxgmb1c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ps9lkiisw"/><path class="oh5vljisv"/><path class="rlcxgmb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-pen"} {...others} />);
}

export default Component;
