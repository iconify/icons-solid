import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk6lyrbfc.css';
import '../../css/l/lpm14mvjr.css';
import '../../css/s/shxtxmbiv.css';
import '../../css/r/rcxz1fmas.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uk6lyrbfc"/><path class="lpm14mvjr"/><path class="shxtxmbiv"/><path class="rcxz1fmas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:reminder-ribbon"} {...others} />);
}

export default Component;
