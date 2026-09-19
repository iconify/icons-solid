import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6y36oe8d.css';
import '../../css/b/biue_cm9l.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="q6y36oe8d"/><path class="biue_cm9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:wmc"} {...others} />);
}

export default Component;
