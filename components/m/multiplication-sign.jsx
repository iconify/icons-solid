import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfo0vldli.css';
import '../../css/o/o6jd39oeq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hfo0vldli"/><path class="o6jd39oeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:multiplication-sign"} {...others} />);
}

export default Component;
