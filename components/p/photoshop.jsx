import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l95p6hgdb.css';
import '../../css/x/xea6o-oef.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l95p6hgdb"/><path class="xea6o-oef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:photoshop"} {...others} />);
}

export default Component;
