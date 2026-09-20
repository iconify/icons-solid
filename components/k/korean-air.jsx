import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx-an1_mg.css';
import '../../css/f/fn5u5cm5f.css';
import '../../css/a/a2x7kgqjz.css';

const viewBox = {"width":1907.315,"height":291.123};
const content = `<defs><mask id="SVGmIolUdhw" width="275.838" height="291.123" x="0" y="0" maskUnits="userSpaceOnUse"><path class="qx-an1_mg"/></mask></defs><g mask="url(#SVGmIolUdhw)"><path class="fn5u5cm5f"/></g><path class="a2x7kgqjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:korean-air"} {...others} />);
}

export default Component;
